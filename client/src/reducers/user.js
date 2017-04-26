import { firebaseApp } from '../base'
import { SET_USER, CREATE_NEW_USER, UPDATE_USER_INFO, SET_GAME, SET_BASE_USERS, ADD_FRIEND } from '../actions/actionTypes'

const base = firebaseApp.database()
const auth = firebaseApp.auth()

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      const { uid, displayName, avatar, email, photoURL } = action.payload
      const newState = { uid, displayName, avatar, email, photoURL }
      return newState
    }

    case CREATE_NEW_USER: {
      const { uid, email, photoURL } = action.payload
      const newState = { uid, email, photoURL }
      base.ref(`users/${uid}`)
      .set({
        displayName: null,
        email: email,
        photoURL: photoURL,
        avatar: null,
        pearls: 100,
        rating: 1200,
        wins: 0,
        losses: 0
      })
      return newState
    }

    case UPDATE_USER_INFO: {
      const { uid, displayName, avatarColorID } = action.payload
      const baseUser = auth.currentUser
      const newState = Object.assign({}, state)
      newState.displayName = displayName
      newState.avatar = avatarColorID

      baseUser.updateProfile({ displayName })
      .then(() => {
        base.ref(`users/${uid}`)
        .update({ displayName, avatar: avatarColorID })
      })
      return newState
    }

    case SET_GAME: {
      const { gameID } = action.payload
      const newState = Object.assign({}, state)
      newState.gameID = gameID
      return newState
    }

    case SET_BASE_USERS: {
      const { usersArray, friendsArray } = action.payload
      const newState = Object.assign({}, state)
      newState.userCategories = [
        {
          category: 'Members',
          users: usersArray
        },
        {
          category: 'Friends',
          users: friendsArray
        }
      ]
      return newState
    }

    case ADD_FRIEND: {
      const newFriend = action.payload
      const newState = Object.assign({}, state)
      /* * accessing users (non-friends) category and filtering out newly added friend * */
      const usersArray = newState.userCategories[0].users
      const newUsersArray = usersArray.filter(user => user.id !== newFriend.id)
      /* * pushing newly added friend into friends category * */
      newState.userCategories[0].users = newUsersArray
      newState.userCategories[1].users.push(newFriend)
      return newState
    }
    default:
      return state
  }
}

export default user
