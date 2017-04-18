import React, { Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

class GamePlayerStatsTable extends Component {
  render () {
    const { onRowSelection, game } = this.props
    const { players } = game

    return (
      <Table deselectOnClickaway={false} onRowSelection={onRowSelection}>
        <TableHeader adjustForCheckbox={false}>
          <TableRow adjustForCheckbox={false}>
            <TableHeaderColumn>Player</TableHeaderColumn>
            <TableHeaderColumn>Rating</TableHeaderColumn>
            <TableHeaderColumn>Odds</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {
            Object.keys(players).map((key, index) => {
              const player = players[key]
              return (
                <TableRow>
                  <TableRowColumn>{player.displayName}</TableRowColumn>
                  <TableRowColumn>{player.rating}</TableRowColumn>
                  <TableRowColumn />
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    )
  }
}

export default GamePlayerStatsTable
