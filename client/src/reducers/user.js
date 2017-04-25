import { firebaseApp } from '../base'
import { SET_USER, CREATE_NEW_USER, UPDATE_USER_INFO, SET_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()
const auth = firebaseApp.auth()
const baseUser = auth.currentUser

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
      base.ref(`users/${uid}`)
      .set({ displayName: null, email: email, photoURL: photoURL })
      return newState
    }

    case UPDATE_USER_INFO: {
      const { uid, displayName, avatarColor } = action.payload
      const pearls = 100
      const rating = 1200
      const wins = 0
      const losses = 0
      const newState = Object.assign({}, state)
      baseUser.updateProfile({ displayName, avatarColor })
      .then(() => {
        base.ref(`users/${uid}`)
        .update({ displayName, avatarColor, pearls, rating, wins, losses })
      })
      .then(() => {
        newState.displayName = displayName
        newState.avatarColor = avatarColor
      })
      .catch((err) => {
        console.log('err', err);
      })
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
