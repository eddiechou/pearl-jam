import { CREATE_NEW_USER, SET_USERNAME, SET_ROOM } from '../actions/actionTypes'

const user = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEW_USER: {
      const { UID, email, photoURL } = action.payload
      const newState = { UID, email, photoURL }
      return newState
    }
    case SET_USERNAME: {
      const { username } = action.payload
      const newState = Object.assign({}, state)
      newState.username = username
      return newState
    }
    case SET_ROOM: {
      const { room } = action.payload
      const newState = Object.assign({}, state)
      newState.room = room
      return newState
    }
    default:
      return state
  }
}

export default user
