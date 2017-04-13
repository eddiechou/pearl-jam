import React, { Component } from 'react'
import { connect } from 'react-redux'
import renderPearl from '../renderPearl/renderPearl'
import style from './arena-css'

import { addPlayerToGame, updatePlayerPosition } from '../../actions/actions'

const { main, instructions, canvas } = style
const KEY_CODE = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACE: 32
}

class Arena extends Component {
  constructor () {
    super()
    this.state = {
      /* * playerID will probably change to userID with Firebase * */
      playerID: null,
      UID: null
    }
  }
  componentDidMount () {
    window.addEventListener('keydown', this.update.bind(this))
    window.addEventListener('keyup', this.update.bind(this))
    this.joinGame()
  }
  /* * anytime an action is dispatched, all the connects are called across the app.
  this means that mapStateToProps will run, and if what is returned has changed (e.g., players),
  it will trigger a rerender of its respective component. * */
  componentDidUpdate () {
    const { players } = this.props
    requestAnimationFrame(() => { this.updatePearlPositions(players) })
  }

  joinGame () {
    const { addPlayerToGame } = this.props
    const playerID = /* Math.floor(Math.random() * 10)  */ 7
    const x = window.innerWidth / 2
    const y = window.innerHeight / 2
    const speed = 50
    /** set redux state and add to firebase **/
    this.setState({ playerID })
    addPlayerToGame({ playerID, x, y, speed })
  }

  update (e) {
    const { playerID } = this.state

    if (e.keyCode === KEY_CODE.LEFT) {
      this.updatePlayer({ playerID: playerID, direction: 'x', value: -1 })
    }
    if (e.keyCode === KEY_CODE.RIGHT) {
      console.log('right')
      this.updatePlayer({ playerID: playerID, direction: 'x', value: 1 })
    }
    if (e.keyCode === KEY_CODE.UP) {
      console.log('up')
      this.updatePlayer({ playerID: playerID, direction: 'y', value: -1 })
    }
    if (e.keyCode === KEY_CODE.DOWN) {
      console.log('down')
      this.updatePlayer({ playerID: playerID, direction: 'y', value: 1 })
    }
    // if (e.keyCode === KEY_CODE.SPACE)
  }

  updatePlayer (payload) {
    const { updatePlayerPosition } = this.props
    updatePlayerPosition(payload)
  }

  updatePearlPositions (players) {
    const ctx = this.refs.ctx.getContext('2d')
    Object.values(players).forEach(player => {
      const { x, y, speed } = player
      requestAnimationFrame(() => { renderPearl(ctx, x, y, speed) })
    })
  }

  render () {
    const { width, height } = this.props.screenSize
    return (
      <div style={main}>
        <div style={instructions}>
          <p>[←][↑][↓][→] to move the things</p>
          <p>[SPACE] to go faster</p>
        </div>
        <canvas ref='ctx'
          style={canvas}
          width={width * 0.75}
          height={height * 0.75}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ screenSize, players }) => {
  /* * attaching redux state to our props * */
  return { screenSize, players }
}

export default connect(mapStateToProps, { addPlayerToGame, updatePlayerPosition })(Arena)

/**
 * the result of rootReducer is passed in here as state. Every time the state is updated, the new state is passed to mapStateToProps
 * by the connect function. mapStateToProps returns the specific piece of state that we care about for this component.
 * the return value is attached to the props of the component. it is basically mapping the state that we care about to the props of the component.
 */

 /* * because this 'state' is referring to the rootReducer object, we can peel off the required
 property / state to change through deconstruction. NOTE: It is NOT the same state as the state inside
 a react component's constructor * */
