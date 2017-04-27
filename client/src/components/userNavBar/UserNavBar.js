import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { firebaseApp, baseAddFriend, baseAddFriendToGame, listenForInvites } from '../../base'

/* * Actions * */
import { addFriend } from '../../actions/friendsActions'

/* * Components * */
import FriendSearchBar from '../friendSearchBar/FriendSearchBar'

/* * Styles * */
import style from './userNavBar-css'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

const auth = firebaseApp.auth()

class UserNavBar extends Component {
  constructor (props) {
    const baseUser = auth.currentUser

    super(props)
    this.state = {
      hover: false,
      showButton: false,
      friendName: null,
      friendID: null,
      categoryID: null
    }
    
    this.getStateThroughProps = this.getStateThroughProps.bind(this)
    this.handleClick = this.handleClick.bind(this)
    if (baseUser) {
      listenForInvites(baseUser.uid)
    }
   
  }

  getStateThroughProps (showButton, friendName, friendID, categoryID) {
    this.setState({ showButton, friendName, friendID, categoryID })
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover })
  }

  handleClick () {
    const { friendName, friendID, categoryID } = this.state
    const { addFriend } = this.props
    const friend = { id: friendID, displayName: friendName }

    categoryID === 0 && addFriend(friend) && baseAddFriend(friend)
    categoryID === 1 && this.addFriendToGame(friend)
    this.setState({ id: null, displayName: null, showButton: false })
  }

  addFriendToGame (friend) {
    try {
      baseAddFriendToGame(friend.id)
    } catch (e) {
      console.log('e', e);
    }
  }

  render () {
    const { bar, button, searchButton, searchButtonHover } = style
    const { hover, showButton, categoryID, friendName } = this.state
    const buttonText = categoryID === 1 ? `invite ${friendName} to play` : `add ${friendName} as a friend`

    return (
      <Toolbar
        style={bar}>
        <ToolbarGroup style={{position: 'relative', display: 'flex', flexWrap: 'wrap'}}>
          <FriendSearchBar
            getStateThroughProps={this.getStateThroughProps} />
          {
          showButton && (
            <button
              style={hover ? searchButtonHover : searchButton}
              onMouseEnter={() => this.toggleHover()}
              onMouseLeave={() => this.toggleHover()}
              onClick={() => this.handleClick()}>
              {buttonText}
            </button>
          )
        }
        </ToolbarGroup>
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

const mapStateToProps = ({ user, games }) => {
  return { user, games }
}
export default connect(mapStateToProps, { addFriend })(UserNavBar)
