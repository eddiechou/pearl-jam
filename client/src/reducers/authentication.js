import { AUTHENTICATE_USER } from '../actions/actionTypes'

const authentication = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER: {
      const {user} = action.payload
      const { displayName, uid, email, photoURL } = user
      const newState = Object.assign({}, state)
      newState[uid] = { displayName, email, photoURL }
    }
  }
}
