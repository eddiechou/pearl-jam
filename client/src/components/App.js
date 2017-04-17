import React, { Component } from 'react'
import { connect } from 'react-redux'

/* * Utils * */
import firebaseApp from '../base'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

/* * Actions * */
import { updateScreenSize } from '../actions/actions'
import { getAvailableServers } from '../actions/gameActions'

/* * Components * */
import AuthenticationPage from './authenticationPage/AuthenticationPage'
import SetDisplayNamePage from './setDisplayNamePage/SetDisplayNamePage'
import UserHomePage from './userHomePage/UserHomePage'
import BettingPage from './bettingPage/BettingPage'
import SpectatorPage from './SpectatorPage'
import GamePage from './GamePage'
import Arena from './arena/Arena'
import PlayerView from './PlayerView/PlayerView'

const history = createHistory()
const auth = firebaseApp.auth()
const base = firebaseApp.database()

class App extends Component {
  constructor (props) {
    super(props)
    const { getAvailableServers } = this.props
    base.ref('servers').once('value', snap => {
      const servers = snap.val()
      getAvailableServers({ servers })
    })

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
      <ConnectedRouter history={history}>
        <div>
          <Route exact path='/' component={AuthenticationPage} />
          <Route path='/join' component={AuthenticationPage} />
          <Route path='/setusername' component={SetDisplayNamePage} />
          <Route path='/home' component={UserHomePage} />
          <Route path='/spectate' component={SpectatorPage} />
          <Route path='/game' component={GamePage} />
          <Route path='/arena' component={Arena} />
          <Route path='/bet' component={BettingPage} />
          <Route path='/playerView' component={PlayerView} />
        </div>
      </ConnectedRouter>
    )
  }
}

export default connect(null, { updateScreenSize, getAvailableServers })(App)
