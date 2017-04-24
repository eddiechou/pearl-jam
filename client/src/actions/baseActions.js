import { firebaseApp } from '../base'
import { SET_AVAILABLE_SERVERS } from './actionTypes'

const base = firebaseApp.database()
const auth = firebaseApp.auth()
