import React from 'react'
import { CirclePicker } from 'react-color'

/* * Styles * */
import style from './colorPicker-css'
import colors from './colors'

const ColorPicker = (props) => {
  const handleChange = (color) => {
    const { getColorThroughProps } = props
    const colorName = colors[color.hex]
    getColorThroughProps(color, colorName)
  }

  const { color } = props
  return (
    <CirclePicker
      onChange={handleChange}
      color={color}
      colors={colors.hex}
      width='600px'
      circleSize='70'
      circleSpacing='25' />
  )
}

export default ColorPicker
