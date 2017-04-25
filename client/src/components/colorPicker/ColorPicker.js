import React from 'react'
import { CirclePicker } from 'react-color'

/* * Styles * */
import style from './colorPicker-css'
import colors from './colors'

const ColorPicker = (props) => {
  const handleChange = (color) => {
    const { getColorThroughProps } = props
    const colorIdx = colors.indexOf(color.hex)
    getColorThroughProps(color, colorIdx)
  }

  const { color } = props
  return (
    <CirclePicker
      onChange={handleChange}
      color={color}
      colors={colors}
      width='600px'
      circleSize='70'
      circleSpacing='25' />
  )
}

export default ColorPicker
