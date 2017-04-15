import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import firebaseApp from '../../base'

/* * Components * */
import UserNavBar from '../userNavBar/UserNavBar'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'

class UserHomePage extends Component {
  render () {
    return (
      <div>
        <UserNavBar />
        <h1> User Home Page </h1>
      </div>
    )
  }
}

UserHomePage.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = ({ user }) => {
  return { user }
}
export default connect(mapStateToProps, null)(UserHomePage)
