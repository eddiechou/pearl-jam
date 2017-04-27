import { SET_BASE_USERS, ADD_FRIEND, CHALLENGE_FRIEND, DELETE_FRIEND } from './actionTypes'

export const setBaseUsers = ({ usersArray, friendsArray }) => ({
  type: SET_BASE_USERS,
  payload: { usersArray, friendsArray }
})

export const addFriend = ({ id, displayName }) => ({
  type: ADD_FRIEND,
  payload: { id, displayName }
})

export const challengeFriend = ({}) => ({
  type: CHALLENGE_FRIEND,
  payload: {}
})

export const deleteFriend = ({}) => ({
  type: DELETE_FRIEND,
  payload: {}
})
