import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGame } from '../../actions/gameActions'
import { firebaseApp } from '../../base'
/* * Styles * */
import style from './gameRoomList-css'

class GameRoomList extends Component {
  constructor () {
    super()
    this.state = {
      selected: null
    }
  }

  handleClick (gameID) {
    const { setGame, games } = this.props
    const { servers } = games
    const currentGame = servers[gameID]
    console.log('currentGame', currentGame);
    this.setState({ selected: gameID })
    window.currentGame = currentGame;
    
    setGame({ currentGame, gameID })

  }
  render () {
    const { container, entryNonClicked, entryClicked } = style
    const { selected } = this.state
    const { servers } = this.props.games
    console.log(!servers)
    return (
      <div style={container} >
        { !servers ? <h1> no free rooms </h1> : servers.map((server, gameID) => (
          <div
            key={gameID}
            style={selected === gameID ? entryClicked : entryNonClicked}
            onClick={this.handleClick.bind(this, gameID)}>
            <h1> {server.room_name} </h1>
          </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { setGame })(GameRoomList)
