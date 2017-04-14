import firebaseApp from '../base'
import { ADD_USER_TO_GAME } from './actionTypes'

const base = firebaseApp.database()

export const addUserToGame = ({ user }) => ({
  type: ADD_USER_TO_GAME,
  payload: { user }
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
