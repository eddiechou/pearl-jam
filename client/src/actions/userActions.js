import { SET_USER, CREATE_NEW_USER, SET_DISPLAY_NAME, SET_GAME } from './actionTypes'

export const setUser = ({ uid, displayName, email, photoURL }) => ({
  type: SET_USER,
  payload: { uid, displayName, email, photoURL }
})

export const createNewUser = ({ uid, email, photoURL }) => ({
  type: CREATE_NEW_USER,
  payload: { uid, email, photoURL }
})

export const setDisplayName = ({ uid, displayName }) => ({
  type: SET_DISPLAY_NAME,
  payload: { uid, displayName }
})

export const setGame = ({ gameID }) => ({
  type: SET_GAME,
  payload: { gameID }
})
