import firebaseApp from '../base'
import { ADD_USER_TO_GAME } from './actionTypes'

const base = firebaseApp.database()

export const addUserToGame = ({ user, displayName }) => ({
  type: ADD_USER_TO_GAME,
  payload: { user, displayName }
})

export const getPlayers = () => {
  return dispatch => {
    base.on('value', snapshot => {
      dispatch({
        type: GET_PLAYERS,
        payload: snapshot.val()
      })
    })
  }
}
