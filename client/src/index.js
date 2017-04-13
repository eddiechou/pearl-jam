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
import AuthenticationPage from './components/authenticationPage/AuthenticationPage'
import SpectatorPage from './components/SpectatorPage'
import GamePage from './components/GamePage'
import Arena from './components/arena/Arena'

const history = createHistory()
const root = document.getElementById('root')

/* * wrapping App.js in Proivder component to allow access to our redux store * */
try {
  render(
    <Provider store={reduxStore}>
      <ConnectedRouter history={history}>
        <div>
          <Route path='/' component={App} />
          <Route exact path='/' component={AuthenticationPage} />
          <Route path='/signup' component={AuthenticationPage} />
          <Route path='/spectate' component={SpectatorPage} />
          <Route path='/game' component={GamePage} />
          <Route path='/arena' component={Arena} />
        </div>
      </ConnectedRouter>
    </Provider>, root)
} catch (e) {
  render(<RedBox error={e} />, root)
}
