import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
/**
 * Utilities
 */
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import reduxStore from './reduxStore'
import RedBox from 'redbox-react'
/**
 * Components
 */
import App from './components/App'
import SetDisplayNamePage from './components/setDisplayNamePage/SetDisplayNamePage'
import AuthenticationPage from './components/authenticationPage/AuthenticationPage'
import UserHomePage from './components/userHomePage/UserHomePage'
import SpectatorPage from './components/SpectatorPage'
import GamePage from './components/GamePage'
import Arena from './components/arena/Arena'
import BettingPage from './components/bettingPage/BettingPage'
import injectTapEventPlugin from 'react-tap-event-plugin'
/**
 * Styles
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  toolbar: {
    height: '56px'
  }
})

injectTapEventPlugin()

const history = createHistory()
const root = document.getElementById('root')

/* * wrapping App.js in Proivder component to allow access to our redux store * */
try {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={reduxStore}>
        <ConnectedRouter history={history}>
          <div>
            <Route path='/' component={App} />
            <Route exact path='/' component={AuthenticationPage} />
            <Route path='/join' component={AuthenticationPage} />
            <Route path='/setusername' component={SetDisplayNamePage} />
            <Route path='/home' component={UserHomePage} />
            <Route path='/spectate' component={SpectatorPage} />
            <Route path='/game' component={GamePage} />
            <Route path='/arena' component={Arena} />
            <Route path='/bet' component={BettingPage} />
          </div>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>, root)
} catch (e) {
  render(<RedBox error={e} />, root)
}
