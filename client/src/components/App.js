import React, { Component } from 'react'
import { connect } from 'react-redux'

/* * Utils * */
import { firebaseApp, baseUIConfig } from '../base'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'

/* * Actions * */
import { getAvailableServers } from '../actions/gameActions'
import { setUser } from '../actions/userActions'

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
    const { getAvailableServers, setUser, user } = this.props

    base.ref('servers').once('value', snap => {
      const servers = snap.val()
      getAvailableServers({ servers })
    })

    auth.onAuthStateChanged(baseUser => {
      const { setUser, user } = this.props
      const { uid, displayName, email, photoURL } = baseUser
      if (baseUser && uid !== user.uid) {
        setUser({ uid, displayName, email, photoURL })
      }
      if (!baseUser) {
        setUser({
          uid: null,
          displayName: null,
          email: null,
          photoURL: null
        })
      }
    })
    this.handleLogout = this.handleLogout.bind(this)
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

  handleLogout () {

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
            <Route path='/goodbye' render={() => this.handleLogout()} />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { getAvailableServers, setUser })(App)
