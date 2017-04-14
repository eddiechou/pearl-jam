import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import user from './user'
<<<<<<< HEAD
import game from './game'
=======
import betReducer from './betReducer'
>>>>>>> (feat) Initial set up of bettingPage

const rootReducer = combineReducers({
  screenSize,
  players,
  user,
  game
})

export default rootReducer
