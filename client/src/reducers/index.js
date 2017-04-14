import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import user from './user'
import game from './game'
import games from './games'

const rootReducer = combineReducers({
  screenSize,
  players,
  user,
  game,
  games
})

export default rootReducer
