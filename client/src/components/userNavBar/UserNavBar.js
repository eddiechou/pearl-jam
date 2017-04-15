import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/* * Components * */
import NavDropMenu from '../navDropMenu/NavDropMenu'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'

class UserNavBar extends Component {
  render () {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text='Pearl Jam' />
        </ToolbarGroup>
        <ToolbarGroup>
          <Link to='/'> <FlatButton label='Friends' /> </Link>
          <Link to='/bet'> <FlatButton label='Bet' /> </Link>
          <Link to='/playerView'> <FlatButton label='Play' /> </Link>
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
