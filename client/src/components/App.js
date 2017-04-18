import React, { Component } from 'react'
import { connect } from 'react-redux'

/* * Utils * */
import { firebaseApp } from '../base'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'

/* * Actions * */
import { getAvailableServers } from '../actions/gameActions'

/* * Components * */
import AuthenticationPage from './authenticationPage/AuthenticationPage'
import SetDisplayNamePage from './setDisplayNamePage/SetDisplayNamePage'
import UserHomePage from './userHomePage/UserHomePage'
import BettingPage from './bettingPage/BettingPage'
import SpectatorPage from './SpectatorPage'
import GamePage from './GamePage'
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
    this.returnToAuth = this.returnToAuth.bind(this)
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

  returnToAuth () {
    return <Redirect to='/' />
  }

  render () {
    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={AuthenticationPage} />
            <Route path='/join' component={AuthenticationPage} />
            <Route path='/setusername' component={SetDisplayNamePage} />
            <Route path='/home' component={UserHomePage} />
            <Route path='/spectate' component={SpectatorPage} />
            <Route path='/game' component={GamePage} />
            <Route path='/bet' component={BettingPage} />
            <Route path='/playerView' component={PlayerView} />
            <Route path='/goodbye' render={this.returnToAuth} />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

export default connect(null, { getAvailableServers })(App)
