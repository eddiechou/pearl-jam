import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setDisplayName } from '../../actions/userActions'
import { addUserToGame } from '../../actions/gameActions'

import firebaseApp from '../../base'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import style from './setDisplayNamePage-css'

import RoomSelector from '../roomSelector/RoomSelector'

const { title } = style
const base = firebaseApp.database()

class SetDisplayNamePage extends Component {
  constructor () {
    super()
    this.state = {
      displayName: '',
      room: null
    }
  }

  /* * { target } is deconstructed from event.target * */
  handleInputChange ({ target }) {
    const displayName = target.value
    this.setState({ displayName })
  }

  handleSubmit () {
    const { setDisplayName, user } = this.props
    const { displayName } = this.state
    const { uid, gameID } = user
    setDisplayName({ uid, displayName })
    addUserToGame({ user })
  }

  checkProps () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <div style={title}>
          one more thing ... pick a badass username and choose your room!
        </div>
        <TextField
          hintText='badass username'
          underlineShow
          fullWidth
          onChange={(event) => this.handleInputChange(event)} />
        <RoomSelector />
        <FlatButton
          label='submit'
          secondary
          fullWidth
          onClick={this.handleSubmit.bind(this)} />
        <FlatButton
          label='props'
          secondary
          fullWidth
          onClick={this.checkProps.bind(this)} />
      </div>
    )
  }
}

SetDisplayNamePage.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setDisplayName, addUserToGame })(SetDisplayNamePage)
