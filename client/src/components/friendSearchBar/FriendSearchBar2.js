import React, { Component } from 'react'
import Select from 'react-select'
import { getFriends, getUsers, addFriend } from '../../base'

/* * Styles * */
import style from './friendSearchBar-css'
import 'react-select/dist/react-select.css'

class FriendsSearchBar extends Component {
  constructor () {
    super()
    this.state = {
      showButton: false,
      value: ''

    }
    this.options = []
    this.onClick = this.onClick.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onOpen = this.onOpen.bind(this)
    this.onChange = this.onChange.bind(this)
    this.optionRenderer = this.optionRenderer.bind(this)
  }

  componentWillMount () {
    const getFriendsPromise = getFriends()
    const getUsersPromise = getUsers()

    const initFriendsArray = (friends) => {
      for (let id in friends) {
        const { displayName } = friends[id]
        const friend = { value: id, label: displayName, color: '#ff5ac6' }
        this.options.push(friend)
      }
    }

    const initUsersArray = (users, friends) => {
      for (let id in users) {
        const { displayName } = users[id]
        const user = { value: id, label: displayName, color: '#ff0080' }
        !friends && this.options.push(user)
        friends && !friends[id] && this.options.push(user)
      }
    }

    getFriendsPromise.then(friends => {
      return new Promise((resolve, reject) => {
        friends && initFriendsArray(friends)
        resolve(friends)
      })
    })
    .then(friends => {
      getUsersPromise.then(users => {
        initUsersArray(users, friends)
      })
    })
  }

  onClick () {
    console.log('on click')
    const { value } = this.state
    const newFriend = { displayName: null, id: value }
    this.options = this.options.map(user => {
      if (user.value === value) {
        user.color = '#ff5ac6'
        newFriend.displayName = value
        console.log('user is ', user)
      }
      return user
    })
    console.log('new friend is ', newFriend)
    console.log('value was ', value)
    this.setState({ value: '', showButton: false })
    addFriend(newFriend)
  }

  onClose () {
    console.log('onClose')
    this.setState({ showButton: true })
  }

  onOpen () {
    this.setState({ showButton: false })
    console.log('onOpen')
  }

  onChange (value) {
    console.log('ON CHANGE')
    console.log('value ', value)
    console.log('arguments ', arguments)
    console.log('this ', this)
    console.log('this.refs ', this.refs)
    this.setState({ value, showButton: true })
  }

  optionRenderer (option) {
    return <div style={{ color: option.color }}>{option.label}</div>
  }

  render () {
    const { button } = style
    return (
      <div>
        <div>
          <Select
            name='username'
            searchPromptText='username'
            options={this.state.options}
            onClose={this.onClose}
            onOpen={this.onOpen}
            onChange={this.onChange}
            matchPos='start'
            noResultsText="doesn't exist"
            optionRenderer={this.optionRenderer}
            scrollMenuIntoView
        />
        </div>
        <div>
          {
        this.state.showButton && (
          <button
            style={button}
            onClick={this.onClick}>
            {`add ${this.state.value}`}
          </button>
        )
      }
        </div>
      </div>
    )
  }
}

export default FriendsSearchBar
