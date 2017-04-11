import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import UPDATE_SCREEN_SIZE from '../actions/actionTypes'
import { updateScreenSize } from '../actions/actions'
import firebaseApp from '../base'

/**
 * Components
 */
import Login from './Login'
import PlayerView from './PlayerView'
import SpectatorView from './SpectatorView'
import Arena from './arena/Arena'
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
      <Router>
        <div>
          <ul>
            <li><Link to='/login'>Login Page</Link></li>
            <li><Link to='/playerView'>Player View</Link></li>
            <li><Link to='/spectatorView'>Spectator View</Link></li>
            <li><Link to='/arena'>lamborghini mercy</Link></li>

          </ul>
          <Route path='/login' component={Login} />
          <Route path='/arena' component={Arena} />

          <Route path='/playerView' component={PlayerView} />
          <Route path='/spectatorView' component={SpectatorView} />

        </div>
      </Router>
    )
  }
}

/**
 * updateScreenSize is an action creator
 * passing in null because we have no need for mapStateToProps .... yet
 */

export default connect(null, { updateScreenSize })(App)
