/* * to avoid unnoticed errors due to spelling mistakes etc. this will ensure any errors are thrown * */
import {CLICKED_ROOM} from '../actions/actionTypes'

const servers =  [
  {name: 'Game Server 1X', clicked: false, link: 'http://104.236.164.62:3001'},
  {name: 'Game Server 2', clicked: false, link: 'http://104.236.164.62:3002'},
  {name: 'Game Server 3', clicked: false,  link: 'http://104.236.164.62:3003'},
  {name: 'Game Server 4', clicked: false, link: 'http://104.236.164.62:3004'},
  {name: 'Game Server 5', clicked: false, link: 'http://104.236.164.62:3006'},
  {name: 'Game Server 6', clicked: false, link: 'http://104.236.164.62:3007'},
]

//Default servers
const rooms = (state = servers, action) => {
  switch (action.type) {
    case CLICKED_ROOM: {
      const whatever = state.map((server) => {
        if (action.name === server.name) { //set the clicked to true
          return Object.assign({}, server, {
            clicked: true
          });
        } else { //making the 
          return Object.assign({}, server, {
            clicked: false
           }); 
        }
      });
      console.log('whatever');
      return whatever;
    }
    default:
      return state
  }
}

export default rooms; 
