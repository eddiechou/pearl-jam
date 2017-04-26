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
          <TableRow style={{marginTop: '0px'}}>
            <TableHeaderColumn style={colStyle}>Player</TableHeaderColumn>
            <TableHeaderColumn style={colStyle}>Rating</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {Object.keys(this.props.game.players).map((key, index) => {
            const player = this.props.game.players[key]
            return (
              <TableRow style={{marginTop: '0px'}} key={index}>
                <TableRowColumn style={colStyle}>{player.displayName}</TableRowColumn>
                <TableRowColumn style={colStyle}>{player.rating}</TableRowColumn>
              </TableRow>)
          })}
        </TableBody>
      </Table>
    )
  }
}

export default GamePlayerStatsTable