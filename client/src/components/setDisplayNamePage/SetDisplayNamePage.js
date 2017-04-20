import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { firebaseApp } from '../../base'

/* * Actions * */
import { setDisplayName } from '../../actions/userActions'

/* * Styles * */
import TextField from 'material-ui/TextField'
import style from './setDisplayNamePage-css'

const auth = firebaseApp.auth()
const base = firebaseApp.database()

class SetDisplayNamePage extends Component {
  constructor () {
    super()
    this.state = {
      hovering: false,
      displayName: '',
      instructions: 'please choose a username'
    }
  }

  /* * { target } is deconstructed from event.target * */
  handleInputChange ({ target }) {
    const displayName = target.value
    this.setState({ displayName })
  }



  handleSubmit (event) {
    const { setDisplayName, user } = this.props
    const { displayName } = this.state
    const { uid } = user
    const baseUser = auth.currentUser

    const q = base.ref('users').orderByChild('displayName').equalTo(displayName)
    q.once('value', (snap) => {
      if (snap.val() === null) {
        setDisplayName({ uid, displayName })
      this.context.router.history.push('/home')
      } else {
        const instructions = 'oh snap, that username\
        has been taken!\
        try a different one :)'
        this.setState({ instructions })
      }
    })

  }

  toggleHover () {
    this.setState({hovering: !this.state.hovering})
  }

  render () {
    const { container, title, inputContainer, textField, input, underLine, buttonContainer, button, buttonHover } = style
    const { hovering, displayName, instructions } = this.state
    return (
      <div style={container}>
        <div style={title}>{instructions}</div>
        <div style={inputContainer}>
          <TextField
            style={textField}
            inputStyle={input}
            underlineFocusStyle={underLine}
            value={displayName}
            onChange={(event) => this.handleInputChange(event)}
            />
        </div>
        <div style={buttonContainer}>
          <button
            style={hovering ? buttonHover : button}
            onMouseEnter={::this.toggleHover}
            onMouseLeave={::this.toggleHover}
            onClick={::this.handleSubmit }>
        submit
        </button>
        </div>
      </div>
    )
  }
}

SetDisplayNamePage.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setDisplayName })(SetDisplayNamePage)
