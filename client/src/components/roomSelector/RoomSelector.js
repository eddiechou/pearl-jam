import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setGame } from '../../actions/userActions'

import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class RoomSelector extends Component {
  constructor () {
    super()
    this.state = {
      gameID: ''
    }
  }

  handleChange (event, index, value) {
    const { user, setGame } = this.props
    const { gameID } = this.state
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
        <MenuItem value={2} primaryText='test' />
      </SelectField>

    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setGame })(RoomSelector)
