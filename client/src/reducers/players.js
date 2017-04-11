/* * to avoid unnoticed errors due to spelling mistakes etc. this will ensure any errors are thrown * */
import { ADD_PLAYER_TO_GAME, UPDATE_PLAYER_POSITION } from '../actions/actionTypes'

const players = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAYER_TO_GAME: {
      const { playerID, x, y, speed } = action.payload
      const newState = Object.assign({}, state)

      // will also update firebase with player info
      newState[playerID] = { x, y, speed }
      return newState
    }
    case UPDATE_PLAYER_POSITION: {
      const { playerID, direction, value } = action.payload
      const newState = Object.assign({}, state)
      console.log('update player position')
      console.log(newState[playerID])
      // must also update firebase
      newState[playerID][direction] += value * newState[playerID].speed
      return newState
    }
    default:
      return state
  }
}

export default players
