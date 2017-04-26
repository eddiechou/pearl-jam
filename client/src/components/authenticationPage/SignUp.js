import React, { Component } from 'react'
import { connect } from 'react-redux'
/* * Actions * */
import { setUser, createNewUser } from '../../actions/userActions'

/** Utils */
import { firebaseApp } from '../../base'

/* * Styles * */
import style from './authenticationPage-css'
require("./bounce-animation.css")




import PropTypes from 'prop-types'


const base = firebaseApp.database()
const auth = firebaseApp.auth()
// const baseUI = new firebaseui.auth.AuthUI(auth)

class SignUp extends Component {
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

  toggleHover (btn) {
    this.setState({ [`hover${btn}`]: !this.state[`hover${btn}`] })
  }

  render () {
    const { container, button1, buttonHover1, button2, formContainer, buttonHover2, emailInput, passwordInput } = style
    const { hover1, hover2 } = this.state
    if (!this.state.authenticating) {
      return (
        <div style={container}>
          <div id="traveler">
            <div id="bouncer"> </div>
          </div>
          <div style={formContainer} >
            <div >
              <h1>Sign Up</h1>
              <div style={{textAlign: 'center'}}>Sign Up!</div>
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
                onClick={::this.createUserWithEmail}>
                Sign Up
              </button>
              <span onClick={() => {this.context.router.history.push('/join')}}
                style={{textAlign: 'right'}}> 
              Have an Account? <span style={{cursor: 'pointer', color: 'blue'}}> Sign In </span></span>
              <hr style={{width: '100%'}}/>

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

SignUp.contextTypes = {
  router: PropTypes.object
}


export default connect(null, { setUser, createNewUser })(SignUp);