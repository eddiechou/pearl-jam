
import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { getFriends, getUsers, addFriend } from '../../base'

import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

/* * Styles * */
import style from './friendSearchBar-css'

const updateUsersArray = (users, userID) => users.filter(user => user.id !== userID)

class FriendsSearchBar extends Component {
  constructor () {
    super()
    this.state = {
      showButton: false,
      value: '',
      id: null
    }

    this.options = []

    this.getSuggestions = this.getSuggestions.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentWillMount () {
    // const getFriendsPromise = getFriends()
    const getUsersPromise = getUsers()

    const initUsersArray = (users) => {
      for (let id in users) {
        const { displayName } = users[id]
        const user = { value: id, label: displayName }
        this.options.push(user)
      }
    }

    getUsersPromise.then(users => {
      initUsersArray(users)
    })

    // const initFriendsArray = (friends) => {
    //   for (let id in friends) {
    //     const { displayName } = friends[id]
    //     const friend = { id, displayName }
    //     this.userCategories[0].users.push(friend)
    //   }
    // }

    // const initUsersArray = (users, friends) => {
    //   for (let id in users) {
    //     const { displayName } = users[id]
    //     const nonFriend = { id, displayName }
    //     !friends && this.userCategories[1].users.push(nonFriend)
    //     friends && !friends[id] && this.userCategories[1].users.push(nonFriend)
    //   }
    // }

    // getFriendsPromise.then(friends => {
    //   return new Promise((resolve, reject) => {
    //     friends && initFriendsArray(friends)
    //     resolve(friends)
    //   })
    // })
    // .then(friends => {
    //   getUsersPromise.then(users => {
    //     initUsersArray(users, friends)
    //   })
    // })
  }

  onChange (event) {
    this.setState({ showButton: false })
  }

  onSuggestionSelected (event, { suggestion }) {
    const { id } = suggestion
    this.setState({ showButton: true, id })
  }

  onClick () {
    const { id, value } = this.state
    const user = { id, displayName: value }
    this.userCategories[1].users = updateUsersArray(this.userCategories[1].users, id)
    this.userCategories[0].users.push(user)
    this.setState({ showButton: false, value: '', id: null })
    addFriend(user)
  }

  onChange (val) {
    console.log('changed ', val)
  }

  render () {
    return (
      <div>
        <div>
          <Select
            name='username'
            searchPromptText='username'
            options={this.options}
            onClose={this.onClose}
            onOpen={this.onOpen}
            onChange={this.onChange}
            matchPos='start'
            noResultsText="doesn't exist"
            optionRenderer
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
