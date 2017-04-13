import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setRoom } from '../../actions/userActions'

import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class RoomSelector extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange (event, index, value) {
    const { setRoom } = this.props
    this.setState({ value })
    setRoom({ room: value })
  }

  render () {
    return (
      <SelectField
        fullWidth
        hintText='rooms'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      >
        <MenuItem value={1} primaryText='main' />
        <MenuItem value={2} primaryText='test' />
      </SelectField>

    )
  }
}

export default connect(null, { setRoom })(RoomSelector)
