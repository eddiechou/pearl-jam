import { ADD_USER_TO_GAME, GET_AVAILABLE_SERVERS, SET_GAME, CREATE_GAME, UPDATE_CURRENT_ACTIVE_GAMES } from './actionTypes'

export const addUserToGame = ({ user, displayName }) => ({
  type: ADD_USER_TO_GAME,
  payload: { user, displayName }
})

export const getAvailableServers = ({ servers }) => ({
  type: GET_AVAILABLE_SERVERS,
  payload: { servers }
})

export const setGame = ({ currentGame, gameID }) => ({
  type: SET_GAME,
  payload: { currentGame, gameID }
})

export const createGame = ({ gameName }) => ({
  type: CREATE_GAME,
  payload: { gameName }
})

export const updateCurrentActiveGames = ({ currentActiveGames }) => ({
  type: UPDATE_CURRENT_ACTIVE_GAMES,
  payload: { currentActiveGames }
})
