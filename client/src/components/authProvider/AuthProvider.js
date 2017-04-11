import React, { Component } from 'react'
import styles from './AuthProvider.css'
import firebaseui from 'firebaseui'

class AuthProvider extends Component {
  render () {
    const { provider, authenticate } = this.props
    const buttonStyle = `${styles[provider]} button ${styles.loginButton}`
    const iconSpan = `${styles.iconSpan} icon`
    const iconStyle = `${styles.loginIcon} fa fa-${provider}`

    return (
      <button className={buttonStyle} onClick={() => authenticate(provider)}>
        <span className={styles.buttonText}>
          {provider[0].toUpperCase() + provider.slice(1)}
        </span>
        <span className={iconSpan}>
          <i className={iconStyle} aria-hidden='true' />
        </span>
      </button>
    )
  }
}

export default AuthProvider
