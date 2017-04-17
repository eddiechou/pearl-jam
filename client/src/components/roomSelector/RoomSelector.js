import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Actions * */
import { setGame } from '../../actions/gameActions'

/* * Styles * */
import SelectField from 'material-ui/SelectField'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

class RoomSelector extends Component {
  constructor () {
    super()
    this.state = {
      gameID: ''
    }
  }

  handleChange (event, index, value) {
    const { setGame } = this.props
    this.setState({ gameID: value })
    setGame({ gameID: value })
  }

  render () {
    return (
      <SelectField
        fullWidth
        hintText='rooms'
        value={this.state.gameID}
        onChange={this.handleChange.bind(this)}
      >
        <MenuItem value={1} primaryText='main' />
        <MenuItem value={2} primaryText='anti gravity' />
        <MenuItem value={3} primaryText='pink' />
      </SelectField>

    )
  }
}

export default connect(null, { setGame })(RoomSelector)
