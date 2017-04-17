import React, { Component } from 'react'
import GamePlayerStatsTable from './GamePlayerStatsTable'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle = {
  height: 500,
  width: 430,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign: 'top'
};

const buttonStyle = {
  margin: 12,
};

class CurrentGameListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {selectedPlayerIndex: null, betValue: null}
  }

  _handleMakeBet () {
    // Grab selected user from the table row
      // Only contains the username
    var selectedPlayer = this.props.game.players[this.state.selectedPlayerIndex]

    console.log('selectedPlayer', selectedPlayer)

    // Grab input value
    console.log('betValue: ', this.state.betValue)


    // Send bet to Firebase
  }

  _handleSpectate () {
    console.log('clicked spectate')
  }

  _handleTextFieldChange (e) {
    this.state.betValue = e.target.value
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
    return (
      <Paper style={paperStyle} zDepth={2}>
        <h2>GameID: {this.props.game.gameID}</h2>

        <GamePlayerStatsTable game={this.props.game} onRowSelection={this._onRowSelection.bind(this)} />

        <TextField hintText="10" floatingLabelText="Wager (Pearls)" onChange={this._handleTextFieldChange.bind(this)}/><br/>
        <RaisedButton label="Spectate Game" primary={true} style={buttonStyle} onClick={this._handleSpectate.bind(this)} />
        <RaisedButton label="Make Bet" secondary={true} style={buttonStyle} onClick={this._handleMakeBet.bind(this)} />
      </Paper>
    )
  }

}

export default CurrentGameListItem