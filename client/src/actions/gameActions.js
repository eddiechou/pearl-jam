import { ADD_USER_TO_GAME, SET_GAME, UPDATE_CURRENT_ACTIVE_GAMES } from './actionTypes'

export const addUserToGame = ({ user, displayName }) => ({
  type: ADD_USER_TO_GAME,
  payload: { user, displayName }
})

export const setGame = ({ currentGame, gameID }) => ({
  type: SET_GAME,
  payload: { currentGame, gameID }
})

export const updateCurrentActiveGames = ({ currentActiveGames }) => ({
  type: UPDATE_CURRENT_ACTIVE_GAMES,
  payload: { currentActiveGames }
})
