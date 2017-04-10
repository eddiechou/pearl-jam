import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import reduxStore from './reduxStore'

/* * RedBox just makes errors fun * */
import RedBox from 'redbox-react'
import App from './App'

const root = document.getElementById('root')

/* * wrapping App.js in Proivder component to allow access to our redux store * */
try {
  render(
    <Provider store={reduxStore}>
      <App />
    </Provider>, root)
} catch (e) {
  render(<RedBox error={e} />, root)
}
