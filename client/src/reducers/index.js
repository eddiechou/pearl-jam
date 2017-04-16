import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import user from './user'
import testGames from './testGames'
import games from './games'

const rootReducer = combineReducers({
  screenSize,
  players,
  user,
  games,
  testGames
})

export default rootReducer
