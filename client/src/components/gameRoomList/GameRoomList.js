import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGame } from '../../actions/gameActions'
/* * Styles * */
import style from './gameRoomList-css'

class GameRoomList extends Component {
  constructor () {
    super()
    this.state = {
      selected: null
    }
  }

  handleClick (idx) {
    const { setGame, games } = this.props
    const { gameRooms } = games
    const currentGame = gameRooms[idx]
    this.setState({ selected: idx })
    setGame({ currentGame })
  }

  render () {
    const { container, entryNonClicked, entryClicked } = style
    const { selected } = this.state
    const { gameRooms } = this.props.games
    return (
      <div style={container} >
        { gameRooms.map((room, idx) => (
          <div
            key={idx}
            style={selected === idx ? entryClicked : entryNonClicked}
            onClick={this.handleClick.bind(this, idx)}>
            <h1> {room.name} </h1>
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
