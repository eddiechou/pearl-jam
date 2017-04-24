import firebase from 'firebase'
import { baseConfig } from './baseConfig'
import store from './store'

import { SET_AVAILABLE_SERVERS, HANDLE_SERVER_UPDATE } from './actions/actionTypes'

export const firebaseApp = firebase.initializeApp(baseConfig)

const base = firebaseApp.database()
const auth = firebaseApp.auth()
// const baseUser = auth.currentUser

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
  base.ref('servers').orderByChild('player_count').endAt(10).once('value').then((snap) => {
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
    return q.once('value').then((snap) => {
      resolve(snap.val() === null)
    })
    .catch(error => console.log('error', error))
  })
}

export const getFriends = () => {
  const baseUser = auth.currentUser
  const { uid } = baseUser
  return new Promise((resolve, reject) => {
    return base.ref(`users/${uid}/friends`)
    .once('value').then((snap) => {
      resolve(snap.val())
    })
    .catch(error => console.log(error))
  })
}

export const getUsers = () => {
  const baseUser = auth.currentUser
  return new Promise((resolve, reject) => {
    return base.ref('users')
    .once('value').then((snap) => {
      resolve(snap.val())
    })
    .catch(error => console.log(error))
  })
}

export const addFriend = (user) => {
  const baseUser = auth.currentUser

  const { uid } = baseUser
  const { id, displayName } = user
  base.ref(`users/${uid}/friends`).child(id).set({ displayName })
}
