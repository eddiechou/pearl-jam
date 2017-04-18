import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import firebaseApp from '../../base'

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
    this.setState({ [`hover${btn}`]: !this.state[`hover${btn}`] })
  }
  handleInputChange ({ target }) {
    const gameName = target.value
    this.setState({ gameName })
  }

  handleSubmit (event) {
    // const {  } = this.props
    const { gameName } = this.state
    base.ref(`servers/2/room_name`).set(gameName)
    // this.setState({isShowingModal: false})
    this.context.router.history.push('/playerView')
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
              onMouseEnter={this.toggleHover.bind(this)}
              onMouseLeave={this.toggleHover.bind(this)}
              onClick={this.handleSubmit.bind(this)}>
          game on
          </button>
          </div>
        </ModalDialog>
      </ModalContainer>

    )
  }
}

export default CreateGameModal
