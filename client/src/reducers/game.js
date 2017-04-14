import firebaseApp from '../base'
import { ADD_USER_TO_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()

const game = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_TO_GAME: {
      const { user } = action.payload
      const { gameID, uid, displayName } = user
      const newState = Object.assign({}, state)
      console.log(action.payload)
      base.ref(`games/${gameID}/players/${uid}`).set({ displayName })
      return
    }
    // case REMOVE_USER_FROM_GAME: {
    //   const { user } = action.payload
    // }
    default:
      return state
  }
}

export default game
