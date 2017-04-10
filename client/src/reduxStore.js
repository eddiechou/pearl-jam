import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

/**
 * creating our redux store ( the empty object is the initial state )
 */
let reduxStore = createStore(rootReducer, {})

export default reduxStore
