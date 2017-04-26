import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePlayerStatsTable from '../gamePlayerStatsTable/GamePlayerStatsTable'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SnackBar from 'react-material-snackbar';
import Modal from 'boron/OutlineModal'
import style from './currentGameCard-css'
import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';

import { firebaseApp } from '../../base'

const base = firebaseApp.database()

class CurrentGameCard extends Component {
  constructor (props) {
    super(props)
    this.state = {selectedPlayerIndex: null, 
      betValue: null, 
      errorText: '', 
      showSnackBar: false,
      playerBet: '',
      notifications: OrderedSet(),
      notificationCount: 0
    }
    this.removeNotification = this.removeNotification.bind(this)
    this.addNotification = this.addNotification.bind(this)
  }

  showModal () {
    this.refs.modal.show()
  }

  hideModal () {
    this.refs.modal.hide()
  }

  addNotification() {
      const { notifications, notificationCount } = this.state
      const id = notifications.size + 1
      const newCount = notificationCount + 1

      const selectedPlayer = this.props.game.players[this.state.selectedPlayerIndex]

      return this.setState({
        count: newCount,
        notifications: notifications.add({
          message: `You just made a bet on "${selectedPlayer.displayName}" for ${this.state.betValue} Pearls!`,
          key: newCount,
          action: 'Dismiss',
          dismissAfter: 5200,
          onClick: () => this.removeNotification(newCount),
        })
      })
    }

    removeNotification (count) {
      const { notifications } = this.state;
      this.setState({
        notifications: notifications.filter(n => n.key !== count)
      })
    }

  _handleMakeBet () {
    const selectedPlayer = this.props.game.players[this.state.selectedPlayerIndex]

    const { gameID, user } = this.props

    // Ensure there's a selectedPlayer and a betValue
    if (!selectedPlayer) {
      this.setState({errorText: 'Select a player to bet on!'})
      return
    } else if (!this.state.betValue) {
      this.setState({errorText: 'Enter a bet value!'})
      return
    }
    // Update bet in database
    const gameBetsRef = base.ref('games/' + this.props.gameID + '/bets')
    gameBetsRef.push({bettorID: user.displayName,
      betValue: this.state.betValue, 
      predictedWinner: selectedPlayer.displayName
    })

    // Take out bet money from the user
    const allUserRef = base.ref('users/')
    allUserRef.once('value', function (snapshot) {
      var users = snapshot.val()
      var userInfo = {}
      for (var key in users) {
        if (users[key].displayName === user.displayName) {
          userInfo.key = key
          userInfo.pearls = users[key].pearls
        }
      }
      if (userInfo.pearls - this.state.betValue < 0) {
        this.setState({errorText: 'Not enough funds'})
      } else if (userInfo.key) { // If we found it, take the money out
        this.addNotification()
        this.setState({errorText: ''})
        const userRef = base.ref('users/' + userInfo.key)
        userRef.update({pearls: userInfo.pearls - this.state.betValue})
      }
    }.bind(this))

    // Change state for snackBar
    this.setState({playerBet: selectedPlayer.displayName})
    this.setState({showSnackBar: true})

  }

  _handleTextFieldChange (e) {
    this.state.betValue = e.target.value
  }

  _onRowSelection (rowNumber) {
    this.state.selectedPlayerIndex = rowNumber
  }

  customStyleFactory(index, style) {
    return Object.assign(
      {},
      { zIndex: 10 },
      { bottom: `${2 + index * 4}rem` }
    );
  }

  render () {
    const { buttonStyle, paperStyle, modalStyle } = style
    return (
      <Paper className='pearl' circle={true} style={paperStyle} zDepth={4}>
        <h3 style={{marginTop: '75px', color: '#f001f2'}}>Active Game: {this.props.index}</h3>

        <GamePlayerStatsTable game={this.props.game} onRowSelection={this._onRowSelection.bind(this)} />

        <TextField errorText={this.state.errorText} hintText='10' floatingLabelText='Wager (Pearls)' onChange={this._handleTextFieldChange.bind(this)} /><br />
        <RaisedButton label='Spectate Game' primary style={buttonStyle} onClick={this.showModal.bind(this)} />
        <RaisedButton label='Make Bet' secondary style={buttonStyle} onClick={this._handleMakeBet.bind(this)} />
        
        <NotificationStack
          notifications={this.state.notifications.toArray()}
          onDismiss={notification => this.setState({
            notifications: this.state.notifications.delete(notification)
          })}
          activeBarStyleFactory={this.customStyleFactory.bind(this)}
        />

        <Modal ref='modal' modalStyle={modalStyle}>
          <iframe id='spectateView' src={this.props.game.spectateUrl}
            height='800px' width='950px' />
          <button onClick={this.hideModal.bind(this)}>Close</button>
        </Modal>

      </Paper>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, null)(CurrentGameCard)

// export default CurrentGameCard

