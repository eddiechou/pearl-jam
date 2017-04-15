import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/* * Utils * */
import firebaseApp from '../../base'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'

const auth = firebaseApp.auth()

class NavDropMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount () {
  }

  handleTouchTap (event) {
    event.preventDefault()
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  };

  handleRequestClose () {
    this.setState({
      open: false
    })
  }

  handleLogout (event) {
    event.preventDefault()
    this.context.router.history.push('/goodbye')
  }
  checkUser () {
    const user = auth.currentUser
    console.log(user)
  }

  render () {
    return (
      <div>
        <FlatButton
          label='More'
          onTouchTap={this.handleTouchTap.bind(this)}
          secondary />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}>
          <Menu>
            <MenuItem primaryText='Check User' onClick={this.checkUser.bind(this)} />
            <Divider />
            <MenuItem containerElement={<Link to='/' />} primaryText='Leaderboard' />
            <MenuItem containerElement={<Link to='/' />} primaryText='Add Friend' />
            <MenuItem containerElement={<Link to='/arena' />} primaryText={`Mycah's Arena`} />
            <Divider />
            <MenuItem label='Logout' onClick={event => this.handleLogout(event)} primaryText='Logout' />
          </Menu>
        </Popover>
      </div>
    )
  }
}

NavDropMenu.contextTypes = {
  router: PropTypes.object
}

export default NavDropMenu
