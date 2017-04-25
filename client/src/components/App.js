import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* * Utils * */
import { firebaseApp, initServers, listenForServerUpdates } from '../base'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'

/* * Actions * */
import { setUser } from '../actions/userActions'

/* * Components * */
import AuthenticationPage from './authenticationPage/AuthenticationPage'
import SetDisplayNamePage from './setDisplayNamePage/SetDisplayNamePage'
import UserHomePage from './userHomePage/UserHomePage'
import BettingPage from './bettingPage/BettingPage'
import SpectatorPage from './SpectatorPage'
import GamePage from './GamePage'
import PlayerView from './playerView/PlayerView'
import Game from './game/Game'
import SignUp from './authenticationPage/SignUp'
const history = createHistory()
const auth = firebaseApp.auth()
const base = firebaseApp.database()

class App extends Component {
  constructor (props) {
    super(props)
    listenForServerUpdates()
  }

  handleLogout () {
  }

  componentWillMount () {
    initServers()
  }

  render () {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <ConnectedRouter history={history}>
          <div style={{height: '100%', width: '100%'}}>
            <Route exact path='/' component={AuthenticationPage} />
            <Route path='/join' component={AuthenticationPage} />
            <Route path='/setusername' component={SetDisplayNamePage} />
            <Route path='/home' component={UserHomePage} />
            <Route path='/spectate' component={SpectatorPage} />
            <Route path='/game' component={GamePage} />
            <Route path='/bet' component={BettingPage} />
            <Route path='/playerView' component={PlayerView} />
            <Route path='/goodbye' render={() => ::this.handleLogout()} />
            <Route path='/playGame' component={Game} />
            <Route path='/signUp' component={SignUp} />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setUser })(App)
