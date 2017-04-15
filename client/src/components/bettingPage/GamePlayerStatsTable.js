import React, { Component } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class GamePlayerStatsTable extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Table deselectOnClickaway={false}>
        <TableHeader adjustForCheckbox={false}>
          <TableRow adjustForCheckbox={false}>
            <TableHeaderColumn>Player</TableHeaderColumn>
            <TableHeaderColumn>Rating</TableHeaderColumn>
            <TableHeaderColumn>Odds</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          <TableRow>
            <TableRowColumn>Eddie</TableRowColumn>
            <TableRowColumn>1500</TableRowColumn>
            <TableRowColumn>.456</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Jeff</TableRowColumn>
            <TableRowColumn>1550</TableRowColumn>
            <TableRowColumn>.544</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )  
  }
}

export default GamePlayerStatsTable