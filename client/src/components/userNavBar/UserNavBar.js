import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { baseAddFriend } from '../../base'

/* * Actions * */
import { addFriend } from '../../actions/userActions'

/* * Components * */
import FriendSearchBar from '../friendSearchBar/FriendSearchBar'

/* * Styles * */
import style from './userNavBar-css'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

class UserNavBar extends Component {
  constructor () {
    super()
    this.state = {
      hover: false,
      showButton: false,
      friendName: null,
      friendID: null
    }
    this.getStateThroughProps = this.getStateThroughProps.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  getStateThroughProps (showButton, friendName, friendID) {
    this.setState({ showButton, friendName, friendID })
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover })
  }

  handleClick () {
    const { friendName, friendID } = this.state
    const { addFriend } = this.props
    const friend = { id: friendID, displayName: friendName }
    addFriend(friend)
    baseAddFriend(friend)
    this.setState({ id: null, displayName: null, showButton: false })
  }

  render () {
    const { bar, button, searchButton, searchButtonHover } = style
    const { hover } = this.state
    return (
      <Toolbar
        style={bar}>
        <FriendSearchBar
          getStateThroughProps={this.getStateThroughProps} />
        {
          this.state.showButton && (
            <button
              style={hover ? searchButtonHover : searchButton}
              onMouseEnter={() => this.toggleHover()}
              onMouseLeave={() => this.toggleHover()}
              onClick={() => this.handleClick()}>
              {`add ${this.state.friendName}`}
            </button>
          )
        }
        <ToolbarGroup>
          <Link to='/home'>
            <button style={button}>HOME</button>
          </Link>
          <Link to='/spectate'>
            <button style={button}>SPECTATE</button>
          </Link>
          <Link to='/playerView'>
            <button style={button}>PLAY</button>
          </Link>

        </ToolbarGroup>
      </Toolbar>
    )
  }
};

UserNavBar.contextTypes = {
  router: PropTypes.object
}

// const mapStateToProps = ({ user }) => {
//   return { user }
// }
export default connect(null, { addFriend })(UserNavBar)
