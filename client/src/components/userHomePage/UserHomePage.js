import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Components * */
import UserNavBar from '../userNavBar/UserNavBar'
import TestNavBar from '../testNavBar/TestNavBar'
import CreateGameModal from '../createGameModal/CreateGameModal'

/* * Styles * */
import style from './userHomePage-css'

class UserHomePage extends Component {
  constructor () {
    super()
    this.state = {
      hover1: false,
      hover2: false,
      isShowingModal: false
    }
  }

  componentDidMount () {

  }

  handleClick (clickID) {
    clickID === 1 && ::this.showModal()
    clickID === 2 && ::this.joinGame()
  }

  showModal () {
    this.setState({isShowingModal: true})
  }

  joinGame() {
    this.context.router.history.push('/playerView')
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
    const { container, button1, buttonHover1, button2, buttonHover2 } = style
    const { hover1, hover2 } = this.state
    return (
      <div>
        <UserNavBar />
        <div style={container}>
          <button
            ref='createGame'
            style={hover1 ? buttonHover1 : button1}
            onMouseEnter={() => ::this.toggleHover(1)}
            onMouseLeave={() => ::this.toggleHover(1)}
            onClick={() => ::this.handleClick(1)}>
            create game
          </button>
          <button
            ref='joinGame'
            style={hover2 ? buttonHover2 : button2}
            onMouseEnter={() => ::this.toggleHover(2)}
            onMouseLeave={() => ::this.toggleHover(2)}
            onClick={() => ::this.handleClick(2)}>
            join game
          </button>
          {
            this.state.isShowingModal && <CreateGameModal />
          }
        </div>
        <TestNavBar />
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

/*
<ModalContainer onClose={::this.closeModal}>
  <ModalDialog onClose={::this.closeModal}>
    <h1>HELLO THIS IS MODAL</h1>
    <TextField
      value={gameName}
      onChange={(event) => this.handleInputChange(event)}
      />
  </ModalDialog>

</ModalContainer>
*/
