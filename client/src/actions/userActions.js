import { CREATE_NEW_USER, SET_DISPLAY_NAME, SET_ROOM } from './actionTypes'

export const createNewUser = ({ uid, email, photoURL }) => ({
  type: CREATE_NEW_USER,
  payload: { uid, email, photoURL }
})

export const setDisplayName = ({ uid, displayName }) => ({
  type: SET_DISPLAY_NAME,
  payload: { uid, displayName }
})

export const setRoom = ({ room }) => ({
  type: SET_ROOM,
  payload: { room }
})
