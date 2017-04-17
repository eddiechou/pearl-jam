import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Actions * */
import { setDisplayName } from '../../actions/userActions'

/* * Styles * */
import TextField from 'material-ui/TextField'
import style from './setDisplayNamePage-css'

class SetDisplayNamePage extends Component {
  constructor () {
    super()
    this.state = {
      hovering: false,
      displayName: ''
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
    setDisplayName({ uid, displayName })
    this.context.router.history.push('/home')
  }

  toggleHover () {
    this.setState({hovering: !this.state.hovering})
  }

  render () {
    const { container, title, inputContainer, textField, input, underLine, buttonContainer, button, buttonHover } = style
    const { hovering, displayName } = this.state
    return (
      <div style={container}>
        <div style={title}>choose your username</div>
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
            onMouseEnter={this.toggleHover.bind(this)}
            onMouseLeave={this.toggleHover.bind(this)}
            onClick={this.handleSubmit.bind(this)}>
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
