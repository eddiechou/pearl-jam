import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* * Utils * */
import { firebaseApp, baseUIConfig } from '../base'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'

/* * Actions * */
import { setAvailableServers } from '../actions/gameActions'
import { setUser } from '../actions/userActions'

/* * Components * */
import AuthenticationPage from './authenticationPage/AuthenticationPage'
import SetDisplayNamePage from './setDisplayNamePage/SetDisplayNamePage'
import UserHomePage from './userHomePage/UserHomePage'
import BettingPage from './bettingPage/BettingPage'
import SpectatorPage from './SpectatorPage'
import GamePage from './GamePage'
import PlayerView from './PlayerView/PlayerView'
import Game from './Game/game'

const history = createHistory()
const auth = firebaseApp.auth()
const base = firebaseApp.database()

class App extends Component {
  constructor (props) {
    super(props)
    const { setUser, user } = this.props

    // auth.onAuthStateChanged(baseUser => {
    //   const { setUser, user } = this.props
    //   const { uid, displayName, email, photoURL } = baseUser
    //   if (baseUser && uid && uid !== user.uid) {
    //     setUser({ uid, displayName, email, photoURL })
    //   }
    //   if (!baseUser) {
    //     setUser({
    //       uid: null,
    //       displayName: null,
    //       email: null,
    //       photoURL: null
    //     })
    //   }
    // })

    // base.ref('servers').on('child_changed', (data) => {
    //   const { setAvailableServers } = this.props
    //   base.ref('servers').orderByChild('player_count').endAt(10).once('value', snap => {
    //     const servers = snap.val()
    //     setAvailableServers({ servers })
    //   })
    // })
  }

  handleLogout () {
  }

  componentWillMount () {
    const { setAvailableServers } = this.props
    base.ref('servers').orderByChild('player_count').endAt(10).once('value', snap => {
      const servers = snap.val()
      setAvailableServers({ servers })
    })
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
            <Route path='/goodbye' render={() => ::this.handleLogout()} />
            <Route path='/playGame' component={Game} />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({}, dispatch)
// }
const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setAvailableServers, setUser })(App)
