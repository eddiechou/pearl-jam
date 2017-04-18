import React, { Component } from 'react'

/* * Components * */
import GamePlayerStatsTable from '../gamePlayerStatsTable/GamePlayerStatsTable'

/* * Styles * */
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import style from './currentGameCard-css'

class CurrentGameListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedPlayerIndex: null
    }
    this._onRowSelection = this._onRowSelection.bind(this)
    this._handleSpectate = this._handleSpectate.bind(this)
    this._handleMakeBet = this._handleMakeBet.bind(this)
  }

  _handleMakeBet () {
    // Grab selected user from the table row
      // Only contains the username
    var selectedPlayerName = this.props.game.players[this.state.selectedPlayerIndex]

    console.log('selectedPlayerName', selectedPlayerName)

    // Grab input value

    // Send bet to Firebase
  }

  _handleSpectate () {
    console.log('clicked spectate')
  }

  _onRowSelection (rowNumber) {
    // Pass the rowNumber up to the Card
    console.log('the selected row is: ', rowNumber)
    this.state.selectedPlayerIndex = rowNumber
  }

  // <h1>{Object.keys(this.props.game.players).map((key, index) => {
  //   const player = this.props.game.players[key]
  //   return player.displayName
  // })}</h1>
  render () {
    const { paper, button } = style
    const { game } = this.props
    return (
      <Paper style={paper} zDepth={2}>
        <h2>GameID: {game.gameID}</h2>
        <GamePlayerStatsTable
          game={game}
          onRowSelection={this._onRowSelection} />
        <TextField
          hintText='10'
          floatingLabelText='Wager (Pearls)' /><br />
        <RaisedButton
          label='Spectate Game'
          primary style={button}
          onClick={this._handleSpectate} />
        <RaisedButton
          label='Make Bet'
          secondary style={button}
          onClick={this._handleMakeBet} />
      </Paper>
    )
  }
}

export default CurrentGameListItem
