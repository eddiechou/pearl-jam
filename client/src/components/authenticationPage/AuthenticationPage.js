import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { firebaseApp, baseUIConfig } from '../../base'
import firebaseui from 'firebaseui'

/* * Components * */
import TestNavBar from '../testNavBar/TestNavBar'

/* * Actions * */
import { setUser, createNewUser } from '../../actions/userActions'

/* * Styles * */
import style from './authenticationPage-css'

const base = firebaseApp.database()
const auth = firebaseApp.auth()
const baseUI = new firebaseui.auth.AuthUI(auth)

class AuthenticationPage extends Component {
  constructor () {
    super()
    this.state = {
      email: null,
      password: null,
      user: null,
      authenticating: false,
      loggedIn: true,
      hover1: false,
      hover2: false
    }
    baseUI.start('#firebaseui-auth-container', baseUIConfig)
  }

  authenticateWithProvider (provider) {
    const { authenticateUser } = this.props
    auth.signInWithPopup(provider)
    .then(result => {
      authenticateUser(result)
      const token = result.credential.accessToken
      const { displayName, uid, email, photoURL } = result.user
      /* * add to reduxStore * */
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

  /* * saving input to access on submit * */
  handleChange ({ target }, key) {
    const { value } = target
    this.setState({ [key]: value })
  }

  /* * Creating new user or authenticating existing user * */
  createUserWithEmail () {
    const { createNewUser } = this.props
    /* * check for real email * */
    const { email, password } = this.state
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      const { uid, email, photoURL } = user
      createNewUser({ uid, email, photoURL })
      this.context.router.history.push('/setusername')
    })
    .catch(error => console.log(error.message))
  }

  authenticateWithEmail () {
    const { setUser } = this.props
    const { email, password } = this.state
    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      const { uid, displayName, email, photoURL } = user
      setUser({ uid, displayName, email, photoURL })
      this.context.router.history.push('/home')
    })
    .catch(error => console.log(error.message))
  }

  toggleHover (btn) {
    this.setState({ [`hover${btn}`]: !this.state[`hover${btn}`] })
  }

  render () {
    const { container, button1, buttonHover1, button2, buttonHover2 } = style
    const { hover1, hover2 } = this.state
    if (!this.state.authenticating) {
      return (
        <div style={container}>
          <div>
            <div >
              <h1>Welcome to Pinballish</h1>
              <div>Join the game using your preferred sign in method</div>
            </div>
            <input
              type='email'
              placeholder='Email'
              onChange={(event) => ::this.handleChange(event, 'email')} />
            <input type='password'
              placeholder='Password'
              onChange={(event) => ::this.handleChange(event, 'password')} />
            <button
              style={hover1 ? buttonHover1 : button1}
              onMouseEnter={() => ::this.toggleHover(1)}
              onMouseLeave={() => ::this.toggleHover(1)}
              onClick={::this.authenticateWithEmail}>
            log in
            </button>
            <button
              style={hover2 ? buttonHover2 : button2}
              onMouseEnter={() => ::this.toggleHover(2)}
              onMouseLeave={() => ::this.toggleHover(2)}
              onClick={::this.createUserWithEmail}>
            sign up
            </button>
            <div id='firebaseui-auth-container' />
          </div>
          <TestNavBar />
        </div>
      )
    }
  }
}

AuthenticationPage.contextTypes = {
  router: PropTypes.object
}

export default connect(null, { setUser, createNewUser })(AuthenticationPage)
