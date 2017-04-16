import { UPDATE_CURRENT_ACTIVE_GAMES, SET_GAME_ROOMS, SET_GAME } from '../actions/actionTypes'

const games = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_ACTIVE_GAMES: {
      const { currentActiveGames } = action.payload
      const newState = Object.assign({}, state)
      newState.currentActiveGames = currentActiveGames
      return newState
    }
    case SET_GAME_ROOMS: {
      const { gameRooms } = action.payload
      const newState = Object.assign({}, state)
      newState.gameRooms = gameRooms
      return newState
    }
    case SET_GAME: {
      const { currentGame } = action.payload
      const newState = Object.assign({}, state)
      newState.currentGame = currentGame
      return newState
    }
    default:
      return state
  }
}

export default games
