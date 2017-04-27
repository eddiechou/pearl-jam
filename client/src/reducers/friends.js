import { firebaseApp } from '../base'
import { SET_BASE_USERS, ADD_FRIEND } from '../actions/actionTypes'

const base = firebaseApp.database()
const auth = firebaseApp.auth()

const friends = (state = {}, action) => {
  switch (action.type) {
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
      console.log('add friend')
      const newState = Object.assign({}, state)

      const newFriend = action.payload
      newFriend.categoryID = 1
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

export default friends
