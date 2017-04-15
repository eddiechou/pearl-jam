import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* * Utils * */
import reduxStore from './reduxStore'
import RedBox from 'redbox-react'

/* * Components * */
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

/* * Styles * */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  toolbar: {
    height: '56px'
  }
})

injectTapEventPlugin()

const root = document.getElementById('root')

/* * wrapping App.js in Proivder component to allow access to our redux store * */
try {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </MuiThemeProvider>, root)
} catch (e) {
  render(<RedBox error={e} />, root)
}
