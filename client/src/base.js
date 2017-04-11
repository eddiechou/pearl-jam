import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCQctYeG8snShSzl07sTpqHpibXFI0aHhI',
  authDomain: 'pearl-jam.firebaseapp.com',
  databaseURL: 'https://pearl-jam.firebaseio.com',
  storageBucket: 'pearl-jam.appspot.com'
}

var firebaseApp = firebase.initializeApp(config)

export default firebaseApp
