// import {compose, createStore, applyMiddleware} from 'redux'
// import rootReducer from './reducers/index.js'
// import { createLogger } from 'redux-logger'

// // Using redux persist to store the data, so it doesnt leave on browser refresh
// import {persistStore, autoRehydrate} from 'redux-persist'

// // creating our redux store ( the empty object is the initial state )

// const middleware = applyMiddleware(createLogger())
// const reduxStore = createStore(rootReducer, compose(middleware, autoRehydrate()))

// // const reduxStore = createStore(rootReducer)
// persistStore(reduxStore)

// export default reduxStore

/* *  WITHOUT LOGGER * */
import { compose, createStore } from 'redux'
import rootReducer from './reducers/index.js'

/* * Using redux persist to store the data, so it doesnt leave on browser refresh * */
import {persistStore, autoRehydrate} from 'redux-persist'

const reduxStore = createStore(rootReducer, compose(autoRehydrate()))

persistStore(reduxStore)

export default reduxStore
