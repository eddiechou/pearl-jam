import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import firebaseApp from '../../base'

/* * Components * */
import UserNavBar from '../userNavBar/UserNavBar'
import TestNavBar from '../testNavBar/TestNavBar'

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
    this.handleClick = this.handleClick.bind(this)
    this.joinGame = this.joinGame.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }

  componentDidMount () {

  }

  handleClick () {
    console.log('')
  }
  joinGame () {
    this.context.router.history.push('/playerView')
  }
  toggleHover (btn) {
    this.setState({ [`hover${btn}`]: !this.state[`hover${btn}`] })
  }

  render () {
    const { container, createButton, createButtonHover, joinButton, joinButtonHover } = style
    const { hover1, hover2 } = this.state
    return (
      <div>
        <UserNavBar />
        <div style={container}>
          <button
            style={hover1 ? createButtonHover : createButton}
            onMouseEnter={() => this.toggleHover(1)}
            onMouseLeave={() => this.toggleHover(1)}
            onClick={this.handleClick()}>
            create game
          </button>
          <button
            style={hover2 ? joinButtonHover : joinButton}
            onMouseEnter={() => this.toggleHover(2)}
            onMouseLeave={() => this.toggleHover(2)}
            onClick={this.joinGame}>
            join game
          </button>
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
