import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'

import NavDropMenu from '../navDropMenu/NavDropMenu'

class UserNavBar extends Component {
  checkProps () {
    console.log(this.props)
  }
  render () {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text='Pearl Jam' />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label='Props' onClick={this.checkProps.bind(this)} />
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
