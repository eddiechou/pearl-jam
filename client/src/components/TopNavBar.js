import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

export default class TopNavBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ul>
        <li><a href='/login'>Login Page</a></li>
        <li><Link to='/playerView'>Player View</Link></li>
        <li><Link to='/spectatorView'>Spectator View</Link></li>
      </ul>
    )
  }
}
