import firebaseApp from '../base'
import { ADD_USER_TO_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()

const game = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_TO_GAME: {
      const { user, displayName } = action.payload
      console.log('user is ', user)
      const { gameID, uid } = user
      const newState = Object.assign({}, state)
      newState.user = 'testing'
      base.ref(`testGames/${gameID}/players/${uid}`).set({ displayName })
      return newState
    }
    // case REMOVE_USER_FROM_GAME: {
    //   const { user } = action.payload
    // }
    default:
      return state
  }
}

export default game
