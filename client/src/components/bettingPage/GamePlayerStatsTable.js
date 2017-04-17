import React, { Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class GamePlayerStatsTable extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Table deselectOnClickaway={false} onRowSelection={this.props.onRowSelection}>
        <TableHeader adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Player</TableHeaderColumn>
            <TableHeaderColumn>Rating</TableHeaderColumn>
            <TableHeaderColumn>Odds</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>

          {Object.keys(this.props.game.players).map((key, index) => {
            const player = this.props.game.players[key]
            return (
              <TableRow key={index}>
                <TableRowColumn>{player.displayName}</TableRowColumn>
                <TableRowColumn>{player.rating}</TableRowColumn>
                <TableRowColumn></TableRowColumn>
              </TableRow>)
          })}
        </TableBody>
      </Table>
    )  
  }
}

export default GamePlayerStatsTable