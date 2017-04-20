import firebase from 'firebase'
import { SET_AVAILABLE_SERVERS } from './actions/actionTypes'
import { setAvailableServers } from './actions/gameActions'

const config = {
  apiKey: 'AIzaSyAr-h45K0XxMQf2PzQdzVW8EJH7upLsxiI',
  authDomain: 'pearl-jam-19d32.firebaseapp.com',
  databaseURL: 'https://pearl-jam-19d32.firebaseio.com',
  storageBucket: 'pearl-jam-19d32.appspot.com'
}

export const firebaseApp = firebase.initializeApp(config)

export const baseUIConfig = {
  signInSuccessUrl: '/home',
  signInFlow: 'popup',

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    }
  ]
}

export const baseMiddleware = ({ dispatch }) => (next) => (action) => {
  const base = firebaseApp.database()
  base.ref('servers').on('child_changed', () => {
    console.log('servers child changed')
    return base.ref('servers').once('value', snap => {
      return snap.val()
    })
    .then(() => {
      setAvailableServers({ servers })
    })
  })
}
