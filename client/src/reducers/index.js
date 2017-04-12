import { combineReducers } from 'redux'
import screenSize from './screenSize'
import players from './players'
import rooms from './rooms'

const rootReducer = combineReducers({
  screenSize,
  players,
  rooms,  
})

export default rootReducer
