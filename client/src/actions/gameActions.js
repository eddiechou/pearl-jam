import { ADD_USER_TO_GAME, SET_GAME_ROOMS, SET_GAME } from './actionTypes'

export const addUserToGame = ({ user, displayName }) => ({
  type: ADD_USER_TO_GAME,
  payload: { user, displayName }
})

export const setGameRooms = ({ gameRooms }) => ({
  type: SET_GAME_ROOMS,
  payload: { gameRooms }
})

export const setGame = ({ currentGame, gameID }) => ({
  type: SET_GAME,
  payload: { currentGame, gameID }
})
