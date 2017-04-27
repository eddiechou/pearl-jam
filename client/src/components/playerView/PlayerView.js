// require componenets
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// /* * Utils * */
// import Iframe from 'react-iframe'
/* * Components * */
import UserNavBar from '../userNavBar/UserNavBar'
import GameRoomList from '../gameRoomList/GameRoomList'
import Modal from 'boron/OutlineModal'
import TestNavBar from '../testNavBar/TestNavBar'
import Authors from '../Authors/Authors'

/* * Styles * */
import style from './playerView-css'
require("./bounce-animation.css")


class PlayerView extends React.Component {
  constructor () {
    super()

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.fireMessage = this.fireMessage.bind(this)
  }
  componentDidMount() {
    this.showModal();
  }
  componentDidUpdate() {
    this.showModal();
  }

  showModal () {
    this.refs.modal.show()
  }

  hideModal () {
    this.refs.modal.hide()
  }

  fireMessage () {
    const { currentGame } = this.props.games
    const iframeElement = document.getElementById('playerView').contentWindow
    var messageObj = {displayName: this.props.user.displayName, url: currentGame.link}
    iframeElement.postMessage(messageObj, currentGame.link)
  }

  render () {
    const { games } = this.props
    const { currentGame } = games
    const { container, game, flexParent, button, modal } = style

    var modalStyle = {
      height: '80%',
      width: '90%'
    }
    return (
      <div style={{height: '100%', width: '100%' }}>
      <UserNavBar />
      <div style={container} id="stage2" >
          <div id="traveler">
            <div id="bouncer"></div>
          </div>
         
        <Modal ref="modal" modalStyle={modalStyle}>
          <div style={game}>
            <div style={flexParent} >
              <h1 style={{fontFamily: 'QuickSand', 
              'fontSize': '50px', marginTop: '-90px'}}>SELECT A GAME SERVER TO JOIN</h1>
              <GameRoomList />
              <Link to='/playGame'> <button style={button}>Join Game!</button> </Link>
            </div>
          </div>
        </Modal>

       </div>
       <Authors />
      </div>
    )
  }
}

const mapStateToProps = ({ games, user }) => {
  return { games, user }
}

export default connect(mapStateToProps)(PlayerView)

            // <button style={button} onClick={this.showModal}>Join Game!</button>
// <Modal ref='modal' modalStyle={modal}>
              // <iframe
                // id='playerView'
                // onLoad={this.fireMessage}
                // src={currentGame ? currentGame.link : games.servers[0].link}
                // height='800px'
                // width='950px' />
              // <button onClick={this.hideModal}>Close</button>
            // </Modal>
