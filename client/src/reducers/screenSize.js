/* * to avoid unnoticed errors due to spelling mistakes etc. this will ensure any errors are thrown * */
import { UPDATE_SCREEN_SIZE } from '../actions/actionTypes'

const screenSize = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SCREEN_SIZE:
      const { width, height, ratio } = action.payload
      return { width, height, ratio }
    default:
      return state
  }
}

export default screenSize
