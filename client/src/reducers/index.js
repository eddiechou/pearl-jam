import { combineReducers } from 'redux'
import user from './user'
import games from './games'
import friends from './friends'

const rootReducer = combineReducers({
  user,
  games,
  friends
})

export default rootReducer
