import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserNavBar from '../userNavBar/UserNavBar'
import firebaseApp from '../../base'
import FlatButton from 'material-ui/FlatButton'

class UserHomePage extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  checkProps () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <UserNavBar />
        <h1> User Home Page </h1>
      </div>
    )
  }
}

// UserHomePage.contextTypes = {
//   router: PropTypes.object
// }

export default UserHomePage
