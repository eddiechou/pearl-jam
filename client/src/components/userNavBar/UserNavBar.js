import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/* * Components * */
import FriendSearchBar from '../friendSearchBar/FriendSearchBar'
import NavDropMenu from '../navDropMenu/NavDropMenu'

/* * Styles * */
import style from './userNavBar-css'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

class UserNavBar extends Component {
  render () {
    const { bar, button } = style
    return (
      <Toolbar
        style={bar}>
        <FriendSearchBar />
        <ToolbarGroup>
          <Link to='/home'>
            <button style={button}>HOME</button>
          </Link>
          <Link to='/bet'>
            <button style={button}>BET</button>
          </Link>
          <Link to='/playerView'>
            <button style={button}>PLAY</button>
          </Link>
          <NavDropMenu />
        </ToolbarGroup>
      </Toolbar>
    )
  }
};

UserNavBar.contextTypes = {
  router: PropTypes.object
}

export default UserNavBar
