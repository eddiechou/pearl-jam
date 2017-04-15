import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import user from './user'
import game from './game'
import games from './games'
import rooms from './rooms'

const rootReducer = combineReducers({
  screenSize,
  players,
  user,
  game,
  games,
  rooms,  
})

export default rootReducer
