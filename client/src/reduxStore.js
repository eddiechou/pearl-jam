// import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/index.js'
// import { createLogger } from 'redux-logger'
// import promiseMiddleware from 'redux-promise'

// // Using redux persist to store the data, so it doesnt leave on browser refresh
// import {persistStore, autoRehydrate} from 'redux-persist'

// // creating our redux store ( the empty object is the initial state )
// const middleware = applyMiddleware([... createLogger(), promiseMiddleware])
// const reduxStore = createStore(rootReducer, composeWithDevTools(middleware, autoRehydrate()))

// persistStore(reduxStore)

// export default reduxStore

/* *  WITHOUT LOGGER * */
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index.js'
import { firebaseApp, baseMiddleware } from './base'
import promiseMiddleware from 'redux-promise'
import {persistStore, autoRehydrate} from 'redux-persist'

const middleware = applyMiddleware(promiseMiddleware)
const reduxStore = createStore(rootReducer, composeWithDevTools(middleware, autoRehydrate()))

persistStore(reduxStore)

export default reduxStore
