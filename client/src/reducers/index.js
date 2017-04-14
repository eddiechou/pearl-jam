import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import user from './user'
import game from './game'

const rootReducer = combineReducers({
  screenSize,
  players,
  user,
  game
})

export default rootReducer
