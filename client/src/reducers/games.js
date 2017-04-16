import { UPDATE_CURRENT_ACTIVE_GAMES, SET_GAME_ROOMS, SET_GAME } from '../actions/actionTypes'
import firebaseApp from '../base'

const auth = firebaseApp.auth()
const base = firebaseApp.database()

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
      const { currentGame, gameID } = action.payload
      const user = auth.currentUser
      const newState = Object.assign({}, state)
      console.log('setting new user to game!', user)
      base.ref(`servers/${gameID}/players`).push(user)
      newState.currentGame = currentGame
      return newState
    }
    default:
      return state
  }
}

export default games
