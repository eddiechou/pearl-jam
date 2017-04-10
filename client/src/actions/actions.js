import { UPDATE_SCREEN_SIZE } from './actionTypes'

export const updateScreenSize = ({ width, height, ratio }) => ({
  type: UPDATE_SCREEN_SIZE,
  payload: { width, height, ratio }
})
