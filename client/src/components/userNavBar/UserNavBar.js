import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import BaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import * as mui from 'material-ui'

import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'

import NavDropMenu from '../navDropMenu/NavDropMenu'

class UserNavBar extends Component {
  render () {
    const { uploadBill, logOut } = this.props

    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text='Pearl Jam' />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label='Watch' />
          <FlatButton label='Play' secondary />
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
