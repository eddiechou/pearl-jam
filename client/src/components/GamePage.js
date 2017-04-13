import React, { Component } from 'react'
import Iframe from 'react-iframe'

class GamePage extends Component {
  render () {
    return (
      <div>
        <h1>Game Page</h1>
        <Iframe url='https://pearl-jam-game-server.herokuapp.com/' width='915' height='615' />
      </div>
    )
  }
}

export default GamePage
