import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebaseApp from '../../base'
import firebaseui from 'firebaseui'
import baseUIConfig from './baseUIConfig'
import authProviders from '../../authProviders'

import { authenticateUser } from '../../actions/authenticationActions'
import { AUTHENTICATE_USER } from '../../actions/actionTypes'

import style from './signUpPage-css'
const { button } = style
const { google, twitter, facebook, github } = authProviders
const database = firebaseApp.database()
const auth = firebaseApp.auth()

class SignUpPage extends Component {
  constructor () {
    super()
    this.state = {
      email: null,
      password: null,
      user: null,
      authenticating: false
    }
    // this.authenticate = this.authenticate.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.authenticateWithEmail = this.authenticateWithEmail.bind(this)
    this.createUserWithEmail = this.createUserWithEmail.bind(this)
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', baseUIConfig)
  }

  authenticateWithProvider (provider) {
    const { authenticateUser } = this.props
    auth.signInWithPopup(provider)
    .then(result => {
      authenticateUser(result)

      const token = result.credential.accessToken
      const { displayName, UID, email, photoURL } = result.user
      // check if user exists (bento)
      // add to reduxStore
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = error.credential
      console.log('error code: ', errorCode)
      console.log('error message: ', errorMessage)
      console.log('email: ', email)
      console.log('credential: ', credential)
    })
  }

  handleChange ({ target }, key) {
    const { value } = target
    this.setState({ [key]: value })
  }

  createUserWithEmail () {
    const { email, password } = this.state
    auth.createUserWithEmailAndPassword(email, password)
  }
  authenticateWithEmail () {
    const { email, password } = this.state
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise.catch(error => console.log(error.message))
  }

  handleLogout () {
    console.log('handling logout')
  }

  auth () {
    auth.onStateChanged(firebaseUser => {})
  }

  render () {
    if (!this.state.authenticating) {
      return (
        <div>
          <div>
            <div >
              <h1>Welcome to Pinballish</h1>
              <div>Join the game using your preferred sign in method</div>
            </div>
            <div id='firebaseui-auth-container' />
            <input type='email' placeholder='Email' onChange={(event) => this.handleChange(event, 'email')} />
            <input type='password' placeholder='Password' onChange={(event) => this.handleChange(event, 'password')} />
            <button ref='btnLogin' type='hidden' style={button} onClick={this.authenticateWithEmail}>
            log in
            </button>
            <button id='btnSignUp' style={button} onClick={this.createUserWithEmail}>
            sign up
            </button>
            <button id='btnLogout' style={button} onClick={this.handleLogout}>
            log out
            </button>
          </div>
        </div>
      )
    }
  }
}

// const mapStateToProps = ({ }) => {

// }

// export default connect(null, { authenticateUser })

export default SignUpPage
