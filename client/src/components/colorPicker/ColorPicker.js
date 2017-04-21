import React from 'react'
import { CirclePicker } from 'react-color'

/* * Styles * */
import style from './colorPicker-css'
import colors from './colors'

class ColorPicker extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { getColorThroughProps, color } = this.props
    const { standard, spring, crayola, neon, material } = colors
    // const { color } = this.state
    return (
      <CirclePicker
        onChange={getColorThroughProps}
        color={color}
        colors={material}
        width='600px'
        circleSize='70'
        circleSpacing='25' />
    )
  }
}

export default ColorPicker
