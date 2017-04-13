import { CREATE_NEW_USER, SET_USERNAME, SET_ROOM } from './actionTypes'

export const createNewUser = ({ UID, email, photoURL }) => ({
  type: CREATE_NEW_USER,
  payload: { UID, email, photoURL }
})

export const setUsername = ({ username }) => ({
  type: SET_USERNAME,
  payload: { username }
})

export const setRoom = ({ room }) => ({
  type: SET_ROOM,
  payload: { room }
})
