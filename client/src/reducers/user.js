import firebaseApp from '../base'
import { SET_USER, CREATE_NEW_USER, SET_DISPLAY_NAME, SET_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      const { uid, displayName, email, photoURL } = action.payload
      const newState = { uid, displayName, email, photoURL }
      return newState
    }

    case CREATE_NEW_USER: {
      const { uid, email, photoURL } = action.payload
      const newState = { uid, email, photoURL }
      /* * writing new user to firebase * */
      base.ref(`users/${uid}`).set({ displayName: null, email: email, photoURL: photoURL })
      return newState
    }

    case SET_DISPLAY_NAME: {
      const { uid, displayName } = action.payload
      const pearls = 100
      const rating = 1200
      const wins = 0
      const losses = 0
      const newState = Object.assign({}, state)
      /* * updating recently added user with display name * */
      base.ref(`users/${uid}`).set({ displayName, pearls, rating, wins, losses })
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
