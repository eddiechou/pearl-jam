import { firebaseApp } from '../base'
import { GET_AVAILABLE_SERVERS } from './actionTypes'

const base = firebaseApp.database()
const auth = firebaseApp.auth()
dispatch({ type: GET_AVAILABLE_SERVERS })

export const getAvailableServers = (dispatch, state) => {
/* * checking available rooms!! * */
  let games = base.child(`games`)
  console.log(games)
}

// function checkIfUserExists(userId) {
//   var usersRef = new Firebase(USERS_LOCATION);
//   usersRef.child(userId).once('value', function(snapshot) {
//     var exists = (snapshot.val() !== null);
//     userExistsCallback(userId, exists);
//   });

// attemptLogin: function(){
//     return function(dispatch,getState){
//         dispatch({type:C.ATTEMPTING_LOGIN});
//         fireRef.authWithOAuthPopup("github", function(error, authData) {
//             if (error) {
//                 dispatch({type:C.DISPLAY_ERROR,error:"Login failed! "+error});
//                 dispatch({type:C.LOGOUT});
//             } else {
//                 // no need to do anything here, startListeningToAuth have already made sure that we update on changes
//             }
//         });
//     };
// },

export const addUserToGame = ({ user, displayName }) => ({
  type: ADD_USER_TO_GAME,
  payload: { user, displayName }
})
