// require componenets
import React from 'react'
import { connect } from 'react-redux'

/* * Utils * */
import Iframe from 'react-iframe'

/* * Components * */
import UserNavBar from '../userNavBar/UserNavBar'
import GameRoomList from '../gameRoomList/GameRoomList'
import Modal from 'boron/OutlineModal'

/* * Styles * */
import style from './playerView-css'

class PlayerView extends React.Component {
  showModal () {
    this.refs.modal.show()
  }

  hideModal () {
    this.refs.modal.hide()
  }

  fireMessage () {
    const { currentGame } = this.props.games
    const iframeElement = document.getElementById('playerView').contentWindow
    iframeElement.postMessage(this.props.displayName, this.state.currentGame.link)
  }

  render () {
    const { games } = this.props
    const { currentGame } = games
    const { container, game, flexParent, button, modal } = style
    return (
      
      <div style={container}>
        <UserNavBar />
        <div style={game}>
          <div style={flexParent} >
            <GameRoomList />
            <button style={button} onClick={this.showModal.bind(this)}>Join Game!</button>
            <Modal ref='modal' modalStyle={modal}>
              <iframe id='playerView' onLoad={this.fireMessage.bind(this)} src={currentGame.link || games[0].link}
                height='800px' width='950px' />
              <button onClick={this.hideModal.bind(this)}>Close</button>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games, user }) => {
  return { games, user }
}

export default connect(mapStateToProps)(PlayerView)
