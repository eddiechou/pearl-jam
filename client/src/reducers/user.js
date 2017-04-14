import firebaseApp from '../base'
import { CREATE_NEW_USER, SET_DISPLAY_NAME, SET_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()

const user = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEW_USER: {
      const { uid, email, photoURL } = action.payload
      const newState = { uid, email, photoURL }
      /* * writing new user to firebase * */
      base.ref(`users/${uid}`).set({ displayName: null, email, photoURL })
      return newState
    }

    case SET_DISPLAY_NAME: {
      const { uid, displayName } = action.payload
      const newState = Object.assign({}, state)
      /* * updating recently added user with display name * */
      base.ref(`users/${uid}`).set({ displayName })
      newState.displayName = displayName
      return newState
    }

    case SET_GAME: {
      const { gameID } = action.payload
      const newState = Object.assign({}, state)
      newState.gameID = gameID
      return newState
    }
    default:
      return state
  }
}

export default user
