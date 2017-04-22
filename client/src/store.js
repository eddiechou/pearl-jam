// import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/index.js'
// import { createLogger } from 'redux-logger'
// import promiseMiddleware from 'redux-promise'

// // Using redux persist to store the data, so it doesnt leave on browser refresh
// import {persistStore, autoRehydrate} from 'redux-persist'

// // creating our redux store ( the empty object is the initial state )
// const middleware = applyMiddleware([... createLogger(), promiseMiddleware])
// const store = createStore(rootReducer, composeWithDevTools(middleware, autoRehydrate()))

// persistStore(store)

// export default store

/* *  WITHOUT LOGGER * */
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index.js'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'

const defaultState = {}

// const middleware = applyMiddleware(baseMiddleware)
const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(thunk), autoRehydrate()))

persistStore(store)

export default store
