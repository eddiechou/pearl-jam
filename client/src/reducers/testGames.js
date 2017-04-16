import firebaseApp from '../base'
import { ADD_USER_TO_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()

const testGames = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_TO_GAME: {
      const { user, displayName } = action.payload
      const { gameID, uid } = user
      const newState = Object.assign({}, state)
      /* * if game property exists on state, copy it to new state,
      otherwise create it and assign to it an empty array * */
      newState.game = (state.game || [])
      /* * push user into players array * */
      newState.game.push({uid, displayName})
      /* * push user into firebase players * */
      base.ref(`testGames/${gameID}/players/${uid}`).set({ displayName })
      return newState
    }
    default:
      return state
  }
}

export default testGames
