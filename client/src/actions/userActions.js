import { SET_USER, CREATE_NEW_USER, UPDATE_USER_INFO, SET_BASE_USERS, ADD_FRIEND } from './actionTypes'

export const setUser = ({ uid, displayName, avatar, email, photoURL }) => ({
  type: SET_USER,
  payload: { uid, displayName, avatar, email, photoURL }
})

export const createNewUser = ({ uid, email, photoURL }) => ({
  type: CREATE_NEW_USER,
  payload: { uid, email, photoURL }
})

export const updateUserInfo = ({ uid, displayName, avatarColorID }) => ({
  type: UPDATE_USER_INFO,
  payload: { uid, displayName, avatarColorID }
})

export const setBaseUsers = ({ usersArray, friendsArray }) => ({
  type: SET_BASE_USERS,
  payload: { usersArray, friendsArray }
})

export const addFriend = ({ id, displayName }) => ({
  type: ADD_FRIEND,
  payload: { id, displayName }
})
