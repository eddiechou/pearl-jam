import { UPDATE_SCREEN_SIZE, ADD_PLAYER_TO_GAME, UPDATE_PLAYER_POSITION } from './actionTypes'

import { UPDATE_GAMES_IN_PROGRESS } from './actionTypes'

export const updateScreenSize = ({ width, height, ratio }) => ({
  type: UPDATE_SCREEN_SIZE,
  payload: { width, height, ratio }
})

export const addPlayerToGame = ({ playerID, x, y, speed }) => ({
  type: ADD_PLAYER_TO_GAME,
  payload: { playerID, x, y, speed }
})

export const updatePlayerPosition = ({ playerID, direction, value }) => ({
  type: UPDATE_PLAYER_POSITION,
  payload: { playerID, direction, value }
})


/* Bet actions */
export const updateCurrentGamesInProgress = ({ games }) => ({
  type: UPDATE_GAMES_IN_PROGRESS,
  payload: { games }
})