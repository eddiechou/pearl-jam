import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'

const rootReducer = combineReducers({
  screenSize,
  players
})

export default rootReducer
