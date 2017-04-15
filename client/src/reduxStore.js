import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import { createLogger } from 'redux-logger'

/**
 * creating our redux store ( the empty object is the initial state )
 */

// const middleware = applyMiddleware(createLogger())
let reduxStore = createStore(rootReducer, middleware)

// let reduxStore = createStore(rootReducer)

export default reduxStore
