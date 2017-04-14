import { UPDATE_GAMES_IN_PROGRESS } from '../actions/actionTypes'

export default function bets (state = {
  currentGamesInProgress: [],
}, action) {

  switch (action.type) {
    case UPDATE_GAMES_IN_PROGRESS: {

      const newState = Object.assign({}, state)
    }
  }

}
