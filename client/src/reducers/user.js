import { CREATE_NEW_USER, SET_USERNAME } from '../actions/actionTypes'

const user = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEW_USER: {
      const { uid, email, photoURL } = action.payload
      const newState = { uid, email, photoURL }
      return newState
    }
    case SET_USERNAME: {
      const { username } = action.payload
      const newState = Object.assign({}, state)
      newState.username = username
      return newState
    }
    default:
      return state
  }
}

export default user
