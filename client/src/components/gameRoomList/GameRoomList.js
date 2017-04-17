import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGame } from '../../actions/gameActions'
import firebaseApp from '../../base'
/* * Styles * */
import style from './gameRoomList-css'

const base = firebaseApp.database()

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
    this.setState({ selected: gameID })
    setGame({ currentGame, gameID })
  }
  render () {
    const { container, entryNonClicked, entryClicked } = style
    const { selected } = this.state
    const { servers } = this.props.games
    return (
      <div style={container} >
        { servers.map((room, gameID) => (
          <div
            key={gameID}
            style={selected === gameID ? entryClicked : entryNonClicked}
            onClick={this.handleClick.bind(this, gameID)}>
            <h1> {room.room_name} </h1>
          </div>
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { setGame })(GameRoomList)
