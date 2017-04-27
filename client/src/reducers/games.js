import { UPDATE_CURRENT_ACTIVE_GAMES, SET_AVAILABLE_SERVERS, HANDLE_SERVER_UPDATE, SET_GAME, HANDLE_GAME_INVITE } from '../actions/actionTypes'
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
      const newState = Object.assign({}, state)
      const { currentGame, gameID } = action.payload
      try {
        if (baseUser && baseUser.uid && baseUser.displayName) {
          const { uid, displayName } = baseUser
          base.ref(`servers/${gameID}/player_count`).once('value')
          .then((snap) => {
            const count = snap.val() + 1
            base.ref(`servers/${gameID}/player_count`).set(count)
          })
          base.ref(`servers/${gameID}/players`).child(uid).set({ displayName })
        } else {
          console.log('need to set stuff')
        }
      } catch (e) {
        console.log('error in set game reducer', e)
      }
      newState.currentGame = currentGame
      console.log('newSTATE', newState)
      return newState
    }
    case HANDLE_GAME_INVITE: {
      const newState = Object.assign({}, state)
      const { gameRoom, user } = action.payload
      const challengeAccepted = confirm(`HEY!!  ${user} has challenged you to a game in the ${gameRoom} ... do you accept?`)
      if (challengeAccepted) {
        // route to game
        newState.gameInvite = { gameRoom, user }
      } else {
        // return
      }
      return newState
    }
    default:
      return state
  }
}

export default games
