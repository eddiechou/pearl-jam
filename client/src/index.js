import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import reduxStore from './reduxStore'

import App from './App'

const root = document.getElementById('root')

/* * wrapping App.js in Proivder component to allow access to our redux store * */
render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, root)
