import firebase from 'firebase'
import { baseConfig } from './baseConfig'
import store from './store'

import { SET_AVAILABLE_SERVERS, HANDLE_SERVER_UPDATE } from './actions/actionTypes'

export const firebaseApp = firebase.initializeApp(baseConfig)

export const base = firebaseApp.database()

export const auth = firebaseApp.auth()

 /*
export const baseMiddleware = ({ dispatch }) => (next) => (action) => {
  dispatch({
    type: ACTION_TYPE,
    payload: { payload }
  })
  next(action)
}
*/

export const initServers = () => {
  base.ref('servers').orderByChild('player_count').endAt(10).once('value', snap => {
    const servers = snap.val()
    store.dispatch({
      type: SET_AVAILABLE_SERVERS,
      payload: { servers }
    })
  })
}

export const listenForServerUpdates = () => {
  base.ref('servers')
  .on('child_changed', data => {
    const server = data.val()
    server.player_count < 10 &&
    store.dispatch({
      type: HANDLE_SERVER_UPDATE,
      payload: { server }
    })
  })
}

export const checkDisplaynameUnique = (displayName) => {
  return new Promise((resolve, reject) => {
    const q = base.ref('users')
    .orderByChild('displayName').equalTo(displayName)
    return q.once('value', (snap) => {
      resolve(snap.val() === null)
    })
    .catch(error => console.log('error', error))
  })
}
