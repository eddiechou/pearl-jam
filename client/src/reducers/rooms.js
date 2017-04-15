/* * to avoid unnoticed errors due to spelling mistakes etc. this will ensure any errors are thrown * */
import {CLICKED_ROOM} from '../actions/actionTypes'

const servers =  [
  {name: 'Heroku game server', clicked: false, link: 'https://pearl-jam-game-server.herokuapp.com/'},
  {name: 'Eddie\'s game server', clicked: false, link: 'http://104.236.164.62:3001'},
  {name: 'Mycah game server', clicked: false, link: 'http://104.236.164.62:3002'},
  {name: 'Jeff Game server', clicked: false,  link: 'http://104.236.164.62:3003'},
  {name: 'Mike game server', clicked: false, link: 'http://104.236.164.62:3004'},
  {name: 'join here to get TrOLOLLZ', clicked: false, link: 'http://104.236.164.62:3006'},
  {name: 'xxNoSCOPE420XXX', clicked: false, link: 'http://104.236.164.62:3007'},
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
