import { UPDATE_CURRENT_ACTIVE_GAMES, SET_AVAILABLE_SERVERS, HANDLE_SERVER_UPDATE, SET_GAME } from '../actions/actionTypes'
import { firebaseApp } from '../base'

const auth = firebaseApp.auth()
const base = firebaseApp.database()
const baseUser = auth.currentUser

const games = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_ACTIVE_GAMES: {
      const { currentActiveGames } = action.payload
      const newState = Object.assign({}, state)
      newState.currentActiveGames = currentActiveGames
      return newState
    }
    case SET_AVAILABLE_SERVERS: {
      const newState = Object.assign({}, state)
      const { servers } = action.payload
      newState.servers = servers
      return newState
    }
    case HANDLE_SERVER_UPDATE: {
      const newState = Object.assign({}, state)
      const { server } = action.payload
      newState.servers[server.server_ID] = server
      return newState
    }
    case SET_GAME: {
      const { currentGame, gameID } = action.payload
      const { uid, displayName } = baseUser
      const newState = Object.assign({}, state)
      base.ref(`servers/${gameID}/player_count`).once('value', snap => {
        const count = snap.val() + 1
        base.ref(`servers/${gameID}/player_count`).set(count)
      })
      base.ref(`servers/${gameID}/players`).child(uid).set({ displayName })
      newState.currentGame = currentGame
      return newState
    }
    default:
      return state
  }
}

export default games
