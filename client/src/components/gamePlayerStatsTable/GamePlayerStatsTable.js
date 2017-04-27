import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import style from './gamePlayerStatsTable-css.js'

class GamePlayerStatsTable extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { tableStyle, colStyle } = style
    return (
      <Table style={tableStyle} deselectOnClickaway={false} onRowSelection={this.props.onRowSelection}>
        <TableHeader adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width: '130px', fontSize: '22px'}}>Player</TableHeaderColumn>
            <TableHeaderColumn style={{width: '60px', fontSize: '22px'}}>Rating</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {Object.keys(this.props.game.players).map((key, index) => {
            const player = this.props.game.players[key]
            return (
              <TableRow key={index}>
                <TableRowColumn style={{width: '130px', fontSize: '22px'}}>{player.displayName}</TableRowColumn>
                <TableRowColumn style={{width: '60px', fontSize: '22px'}}>{player.rating}</TableRowColumn>
              </TableRow>)
          })}
        </TableBody>
      </Table>
    )
  }
}

export default GamePlayerStatsTable