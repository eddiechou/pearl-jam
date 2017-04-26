import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { baseUIConfig } from '../../baseConfig'
import { firebaseApp } from '../../base'
import firebaseui from 'firebaseui'

/* * Components * */
import TestNavBar from '../testNavBar/TestNavBar'
/* * Actions * */
import { setUser, createNewUser } from '../../actions/userActions'

/* * Styles * */
import style from './authenticationPage-css'
require("./bounce-animation.css")



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
    // baseUI.start('#firebaseui-auth-container', baseUIConfig)
  }
  componentDidMount() {



  }



  authenticateWithProvider (provider) {
    const { setUser } = this.props
    auth.signInWithPopup(provider)
    .then(user => {
      const { uid, displayName, email, photoURL } = user
      setUser({ uid, displayName, email, photoURL })
      this.context.router.history.push('/home')
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
      return new Promise((resolve, reject) => {
        const { uid, displayName, email, photoURL } = user
        return base.ref(`users/${uid}`).once('value')
        .then(snap => {
          const { avatar } = snap.val()
          resolve({ uid, displayName, avatar, email, photoURL })
        })
      })
    })
    .then((userObject) => {
      setUser(userObject)
      this.context.router.history.push('/home')
    })
    .catch(error => console.log(error.message))
  }

  toggleHover (btn) {
    this.setState({ [`hover${btn}`]: !this.state[`hover${btn}`] })
  }

  render () {
    const { container, button1, buttonHover1, button2, formContainer, buttonHover2, emailInput, passwordInput } = style
    const { hover1, hover2 } = this.state
    if (!this.state.authenticating) {
      return (
        <div id="stage" style={container}>
          <div id="traveler">
            <div id="bouncer"></div>
          </div>
          <div style={formContainer} >
            <div >
              <h1>Sign In</h1>
              <div style={{textAlign: 'center'}}>Log in!</div>
            </div>
            <input
              type='email'
              placeholder='Email'
              onChange={(event) => ::this.handleChange(event, 'email')} 
              style={emailInput}
              />

            <input type='password'
              placeholder='Password'
              onChange={(event) => ::this.handleChange(event, 'password')} 
              style={passwordInput}
              />

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <button
                style={hover1 ? buttonHover1 : button1}
                onMouseEnter={() => ::this.toggleHover(1)}
                onMouseLeave={() => ::this.toggleHover(1)}
                onClick={::this.authenticateWithEmail}>
              log in
              </button>
              <span onClick={() => {this.context.router.history.push('/signUp')}}
                style={{textAlign: 'right'}}> 
              No account? <span style={{cursor: 'pointer', color: 'blue'}}> Sign up </span> </span>
              <hr style={{width: '100%', marginTop: 30}}/>

              <button
                style={hover2 ? buttonHover2 : button2}
                onClick={() => {this.context.router.history.push('/home')}}
                >
               Or continue as a guest
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}

AuthenticationPage.contextTypes = {
  router: PropTypes.object
}

export default connect(null, { setUser, createNewUser })(AuthenticationPage)
