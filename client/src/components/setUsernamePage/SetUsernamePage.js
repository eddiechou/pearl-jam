import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setUsername } from '../../actions/userActions'

import firebaseApp from '../../base'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import style from './setUsernamePage-css'

import RoomSelector from '../roomSelector/RoomSelector'

const { title } = style
const base = firebaseApp.database()

class SetUsernamePage extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      room: null
    }
  }

  /* * { target } is deconstructed from event.target * */
  handleInputChange ({ target }) {
    const username = target.value
    this.setState({ username })
  }

  handleSubmit () {
    const { setUsername, user } = this.props
    const { username } = this.state
    const { uid, email, photoURL } = user
    setUsername({ username })
    base.ref(`users/${uid}`).set({ username, email, photoURL })

  //   base.ref('users').child(username).runTransaction(new Transaction.Handler() {
  //     @Override
  //     public Transaction.Result doTransaction(MutableData mutableData) {
  //         if (mutableData.getValue() == null) {
  //             mutableData.setValue(authData.getUid());
  //             return Transaction.success(mutableData);
  //         }
  //         return Transaction.abort();
  //     }
  //       @Override
  //       public void onComplete(FirebaseError firebaseError, boolean commited, DataSnapshot dataSnapshot) {
  //           if (commited) {
  //             console.log('username saved')
  //             setUsername({ username })
  //           } else {
  //               console.log('username exists')
  //           }
  //       }
  //   })
  }

  checkProps () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <div style={title}>
          one more thing ... pick a badass username and choose your room!
        </div>
        <TextField
          hintText='badass username'
          underlineShow
          fullWidth
          onChange={(event) => this.handleInputChange(event)} />
        <RoomSelector />
        <FlatButton
          label='submit'
          secondary
          fullWidth
          onClick={this.handleSubmit.bind(this)} />
        <FlatButton
          label='props'
          secondary
          fullWidth
          onClick={this.checkProps.bind(this)} />
      </div>
    )
  }
}

SetUsernamePage.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setUsername })(SetUsernamePage)
