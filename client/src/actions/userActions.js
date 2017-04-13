import { CREATE_NEW_USER, SET_USERNAME } from './actionTypes'

export const createNewUser = ({ uid, email, photoURL }) => ({
  type: CREATE_NEW_USER,
  payload: { uid, email, photoURL }
})

export const setUsername = ({ username }) => ({
  type: SET_USERNAME,
  payload: { username }
})
