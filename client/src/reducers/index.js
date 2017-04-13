import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import user from './user'

const rootReducer = combineReducers({
  screenSize,
  players,
  user
})

export default rootReducer
