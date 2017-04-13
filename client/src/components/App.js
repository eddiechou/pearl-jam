import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import UPDATE_SCREEN_SIZE from '../actions/actionTypes'
import { updateScreenSize } from '../actions/actions'
import firebaseApp from '../base'

/**
 * Components
 */
import TopNavBar from './TopNavBar'

const database = firebaseApp.database()

class App extends React.Component {
  componentDidMount () {
    window.addEventListener('resize', this.handleWindowResize.bind(this))
    this.handleWindowResize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize () {
    const { updateScreenSize } = this.props
    const width = window.innerWidth
    const height = window.innerHeight
    const ratio = window.devicePixelRatio || 1
    updateScreenSize({ width, height, ratio })
  }

  render () {
    return (
      <div>
        <ul>
          <li><Link to='/login'>Login Page</Link></li>
          <li><Link to='/game'>Game Page</Link></li>
          <li><Link to='/signup'>Sign Up Page</Link></li>
          <li><Link to='/spectate'>Spectator Page</Link></li>
          <li><Link to='/arena'>lamborghini mercy</Link></li>
        </ul>
      </div>
    )
  }
}

/**
 * updateScreenSize is an action creator
 * passing in null because we have no need for mapStateToProps .... yet
 */
const mapStateToProps = (state) => {
  return {
    user: state.authentication
  }
}

export default connect(mapStateToProps, { updateScreenSize })(App)
