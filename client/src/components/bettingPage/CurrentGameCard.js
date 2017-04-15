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
};

const buttonStyle = {
  margin: 12,
};

class CurrentGameListItem extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Paper style={paperStyle} zDepth={2}>
        <h2>GameID: {this.props.game.gameID}</h2>
        <h1>{this.props.game.players[0]} VS. {this.props.game.players[1]}</h1>
        <GamePlayerStatsTable/>

        <TextField
          hintText="1000"
          floatingLabelText="Wager"
        /><br/>
        <RaisedButton label="Spectate Game" primary={true} style={buttonStyle} />
        <RaisedButton label="Make Bet" secondary={true} style={buttonStyle} />
      </Paper>
    )
  }

}

export default CurrentGameListItem