import {compose, createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index.js'
import { createLogger } from 'redux-logger'

//Using redux persist to store the data, so it doesnt leave on browser refresh
import {persistStore, autoRehydrate} from 'redux-persist'
/**
 * creating our redux store ( the empty object is the initial state )
 */

const middleware = applyMiddleware(createLogger())
let reduxStore = createStore(rootReducer, compose(middleware, autoRehydrate()));

// let reduxStore = createStore(rootReducer)
persistStore(reduxStore)


export default reduxStore
