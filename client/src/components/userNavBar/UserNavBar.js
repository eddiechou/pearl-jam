import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/* * Components * */
import NavDropMenu from '../navDropMenu/NavDropMenu'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'

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
          <Link to='/spectate'><FlatButton label='Watch' /></Link>
          <Link to='/game'><FlatButton label='Play' secondary /></Link>
          <NavDropMenu />
        </ToolbarGroup>
      </Toolbar>
    )
  }
};

UserNavBar.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = ({ user }) => {
  return { user }
}
export default connect(mapStateToProps, null)(UserNavBar)
