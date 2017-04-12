import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index.js'
/**
 * creating our redux store ( the empty object is the initial state )
 */
import logger from 'redux-logger'



let reduxStore = createStore(rootReducer, applyMiddleware(logger)); 

export default reduxStore
