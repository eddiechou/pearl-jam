import { combineReducers } from 'redux'
import user from './user'
import games from './games'

const rootReducer = combineReducers({
  user,
  games
})

export default rootReducer
