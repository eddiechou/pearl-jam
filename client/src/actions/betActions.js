import { UPDATE_CURRENT_ACTIVE_GAMES } from './actionTypes'

/* Bet actions */
export const updateCurrentActiveGames = ({ currentActiveGames }) => ({
  type: UPDATE_CURRENT_ACTIVE_GAMES,
  payload: { currentActiveGames }
})