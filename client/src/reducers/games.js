import { UPDATE_CURRENT_ACTIVE_GAMES } from '../actions/actionTypes'

const games = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_ACTIVE_GAMES: {
      const { currentActiveGames } = action.payload;
      const newState = Object.assign({}, state)
      newState.currentActiveGames = currentActiveGames
      return newState
    }
    default:
      return state
  }
}

export default games;