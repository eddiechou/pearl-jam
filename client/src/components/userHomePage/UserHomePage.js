import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import firebaseApp from '../../base'

/* * Components * */
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import UserNavBar from '../userNavBar/UserNavBar'

/* * Styles * */
import style from './userHomePage-css'
import TextField from 'material-ui/TextField'

import FlatButton from 'material-ui/FlatButton'

class UserHomePage extends Component {
  constructor () {
    super()
    this.state = {
      hover1: false,
      hover2: false,
      isShowingModal: false,
      gameName: ''
    }
    this.createGame = this.createGame.bind(this)
    this.joinGame = this.joinGame.bind(this)
  }
  createGame () {
    this.setState({isShowingModal: true})
  }
  joinGame () {

  }
  toggleHover (btn) {
    this.setState({ [`hover${btn}`]: !this.state[`hover${btn}`] })
  }

  handleInputChange ({ target }) {
    const gameName = target.value
    this.setState({ gameName })
  }

  closeModal () {
    this.setState({isShowingModal: false})
    /* * send game name to firebae * */
  }

  render () {
    const { container, title, inputContainer, textField, input, underLine, buttonContainer, createButton, createButtonHover, joinButton, joinButtonHover } = style
    const { hover1, hover2, gameName } = this.state
    return (
      <div>
        <UserNavBar />
        <div style={container}>
          <button
            style={hover1 ? createButtonHover : createButton}
            onMouseEnter={this.toggleHover.bind(this, 1)}
            onMouseLeave={this.toggleHover.bind(this, 1)}
            onClick={this.createGame}>
            create game
          </button>
          <button
            style={hover2 ? joinButtonHover : joinButton}
            onMouseEnter={this.toggleHover.bind(this, 2)}
            onMouseLeave={this.toggleHover.bind(this, 2)}
            onClick={this.joinGame}>
            join game
          </button>
          {
            this.state.isShowingModal &&
            <ModalContainer onClose={this.closeModal.bind(this)}>
              <ModalDialog onClose={this.closeModal.bind(this)}>
                <h1>HELLO THIS IS MODAL</h1>
                <TextField
                  value={gameName}
                  onChange={(event) => this.handleInputChange(event)}
                  />
              </ModalDialog>
            </ModalContainer>
          }
        </div>
      </div>
    )
  }
}

UserHomePage.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = ({ user }) => {
  return { user }
}
export default connect(mapStateToProps, null)(UserHomePage)
