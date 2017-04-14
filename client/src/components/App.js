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

const base = firebaseApp.database()
const auth = firebaseApp.auth()

class App extends React.Component {
  constructor () {
    super()
    auth.onAuthStateChanged(firebaseUser => {
      // if (firebaseUser) {
      //   this.setState({loggedIn: true})
      //   console.log(firebaseUser)
      // } else {
      //   this.setState({loggedIn: false})
      //   console.log('not logged in')
      // }
    })
  }
  componentDidMount () {
    window.addEventListener('resize', this.handleWindowResize.bind(this))
    this.handleWindowResize()
  }

  componentDidUpdate () {
        /**
     * maintain authentication of user for duration of session
     * make this write to redux state
     */
    auth.onAuthStateChanged(firebaseUser => {
      // if (firebaseUser) {
      //   this.setState({loggedIn: true})
      //   console.log(firebaseUser)
      // } else {
      //   this.setState({loggedIn: false})
      //   console.log('not logged in')
      // }
    })
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
          <li><Link to='/game'>Game Page</Link></li>
          <li><Link to='/join'>Join</Link></li>
          <li><Link to='/spectate'>Spectator Page</Link></li>
          <li><Link to='/arena'>lamborghini mercy</Link></li>
          <li><Link to='/bet'>Make Bets Page</Link></li>
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
