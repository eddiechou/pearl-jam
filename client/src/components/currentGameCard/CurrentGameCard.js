import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePlayerStatsTable from '../gamePlayerStatsTable/GamePlayerStatsTable'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Modal from 'boron/OutlineModal'
import style from './currentGameCard-css'

import { firebaseApp } from '../../base'

const base = firebaseApp.database()

class CurrentGameCard extends Component {
  constructor (props) {
    super(props)
    this.state = {selectedPlayerIndex: null, betValue: null, errorText: ''}
  }

  showModal () {
    this.refs.modal.show()
  }

  hideModal () {
    this.refs.modal.hide()
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
    gameBetsRef.push({bettorID: user.displayName, betValue: this.state.betValue, predictedWinner: selectedPlayer.displayName})

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
        this.state.errorText = 'Not enough funds'
      } else if (userInfo.key) { // If we found it, take the money out
        this.state.errorText = ''
        const userRef = base.ref('users/' + userInfo.key)
        userRef.update({pearls: userInfo.pearls - this.state.betValue})
      }
    }.bind(this))
  }

  _handleTextFieldChange (e) {
    this.state.betValue = e.target.value
  }

  _onRowSelection (rowNumber) {
    this.state.selectedPlayerIndex = rowNumber
  }

  render () {
    const { buttonStyle, paperStyle, modalStyle } = style
    return (
      <Paper style={paperStyle} zDepth={2}>
        <h2>Active Game: {this.props.index}</h2>

        <GamePlayerStatsTable game={this.props.game} onRowSelection={this._onRowSelection.bind(this)} />

        <TextField errorText={this.state.errorText} hintText='10' floatingLabelText='Wager (Pearls)' onChange={this._handleTextFieldChange.bind(this)} /><br />
        <RaisedButton label='Spectate Game' primary style={buttonStyle} onClick={this.showModal.bind(this)} />
        <RaisedButton label='Make Bet' secondary style={buttonStyle} onClick={this._handleMakeBet.bind(this)} />
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
