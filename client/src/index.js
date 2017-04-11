import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import RedBox from 'redbox-react'
import reduxStore from './reduxStore'

import App from './components/App'
const history = createHistory()
const root = document.getElementById('root')

/* * wrapping App.js in Proivder component to allow access to our redux store * */
try {
  render(
    <Provider store={reduxStore}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, root)
} catch (e) {
  render(<RedBox error={e} />, root)
}
