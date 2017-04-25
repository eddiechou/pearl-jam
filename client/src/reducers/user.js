import { firebaseApp } from '../base'
import { SET_USER, CREATE_NEW_USER, UPDATE_USER_INFO, SET_GAME } from '../actions/actionTypes'

const base = firebaseApp.database()
const auth = firebaseApp.auth()

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
      .set({ displayName: null, email: email, photoURL: photoURL, avatar: null, pearls: 100, rating: 1200, wins: 0, losses: 0 })
      return newState
    }

    case UPDATE_USER_INFO: {
      console.log('updating user info')
      const { uid, displayName, avatarColorID } = action.payload
      console.log('info', uid, displayName, avatarColorID)
      const baseUser = auth.currentUser
      const newState = Object.assign({}, state)
      baseUser.updateProfile({ displayName })
      .then(() => {
        base.ref(`users/${uid}`)
        .update({ displayName, avatar: avatarColorID })
      })
      .then(() => {
        newState.displayName = displayName
        newState.avatar = avatarColorID
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
