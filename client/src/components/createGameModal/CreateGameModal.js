import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { firebaseApp } from '../../base'

/* * Styles * */
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import TextField from 'material-ui/TextField'
import style from './createGameModal-css'

const base = firebaseApp.database()

class CreateGameModal extends Component {
  constructor () {
    super()
    this.state = {
      hover: false,
      gameName: ''
    }
  }

  toggleHover (btn) {
    this.setState({ hover: !this.state.hover })
  }

  handleInputChange ({ target }) {
    const gameName = target.value
    this.setState({ gameName })
  }

  handleSubmit (event) {
    const { gameName } = this.state
    let serverID = null
    base.ref('servers').orderByChild('player_count').equalTo(0).once('value', snap => {
      serverID = Object.keys(snap.val())[0]
      return
    })
    .then(() => {
      const server = base.ref(`servers/${serverID}`)
      server.child('room_name').set(gameName)
      server.child('player_count').set(1)
      return
    })
    .then(() => {
      this.context.router.history.push('/playerView')
    })
  }

  render () {
    const { inputContainer, textField, input, underLine, container, title, buttonContainer, button, buttonHover } = style
    const { hover, gameName } = this.state
    return (
      <ModalContainer>
        <ModalDialog
          style={container}
          >
          <div style={title}>name yo game</div>
          <div style={inputContainer}>
            <TextField
              id='textField'
              style={textField}
              inputStyle={input}
              underlineFocusStyle={underLine}
              value={gameName}
              onChange={(event) => this.handleInputChange(event)}
            />
          </div>
          <div style={buttonContainer}>
            <button
              style={hover ? buttonHover : button}
              onMouseEnter={::this.toggleHover}
              onMouseLeave={::this.toggleHover}
              onClick={::this.handleSubmit}>
          game on
          </button>
          </div>
        </ModalDialog>
      </ModalContainer>

    )
  }
}

CreateGameModal.contextTypes = {
  router: PropTypes.object
}

export default CreateGameModal
