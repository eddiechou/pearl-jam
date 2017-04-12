/* * to avoid unnoticed errors due to spelling mistakes etc. this will ensure any errors are thrown * */
import {CLICKED_ROOM} from '../actions/actionTypes'

const servers =  [
  {name: 'Game Server 1', link: ''},
  {name: 'Game Server 2', link: ''},
  {name: 'Game Server 3', link: ''},
  {name: 'Game Server 4', link: ''},
]
  
//Default servers
const rooms = (state = servers, action) => {
  switch (action.type) {
    case CLICKED_ROOM: {
      return state;
    }
    default:
      return state
  }
}

export default rooms; 
