import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { getFriends, getUsers, addFriend } from '../../base'

/* * Styles * */
import style from './friendSearchBar-css'

const getSuggestionValue = (suggestion) => suggestion.displayName

const getSectionSuggestions = (section) => section.users

const renderSuggestion = (suggestion) => (
  <div style={{color: suggestion.color}}>
    {suggestion.displayName}
  </div>
)

const renderSectionTitle = (section) => {
  return (
    <strong>{section.category}</strong>
  )
}

const updateUsersArray = (users, userID) => users.filter(user => user.id !== userID)

class FriendsSearchBar extends Component {
  constructor () {
    super()

    this.state = {
      showButton: false,
      value: '',
      id: null,
      suggestions: [],
      hover: false
    }
    this.userCategories = [
      {
        category: 'Friends',
        users: []
      },
      {
        category: 'Members',
        users: []
      }
    ]
    this.getSuggestions = this.getSuggestions.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }

  componentWillMount () {
    const getFriendsPromise = getFriends()
    const getUsersPromise = getUsers()
    const initFriendsArray = (friends) => {
      for (let id in friends) {
        const { displayName } = friends[id]
        const friend = { id, displayName, color: '#ffffff' }
        this.userCategories[0].users.push(friend)

      }


    const initUsersArray = (users, friends) => {
      for (let id in users) {
        const { displayName } = users[id]
        const user = { id, displayName, color: '#f001f2' }
        !friends && this.userCategories[1].users.push(user)
        friends && !friends[id] && this.userCategories[1].users.push(user)
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
      .catch(error => console.log(error))
   }
 }


  onChange (event, { newValue }) {
    this.setState({ showButton: false, value: newValue })
  }

  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] })
  }

  getSuggestions (value) {
    const { userCategories } = this
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : userCategories.map(userCategory => {
      return {
        category: userCategory.category,
        users: userCategory.users.filter(user => {
          return user.displayName && user.displayName.toLowerCase().slice(0, inputLength) === inputValue
        })
      }
    })
  }

  onSuggestionSelected (event, { suggestion }) {
    const { id } = suggestion
    this.setState({ showButton: true, id })
  }

  handleClick () {
    const { id, value } = this.state
    const user = { id, displayName: value }
    this.userCategories[1].users = updateUsersArray(this.userCategories[1].users, id)
    this.userCategories[0].users.push(user)
    this.setState({ showButton: false, value: '', id: null })
    addFriend(user)
  }

  toggleHover () {
    this.setState({ hover: !this.state.hover })
  }

  render () {
    const { button, buttonHover } = style
    const { value, suggestions, hover } = this.state
    const inputProps = {
      placeholder: 'FIND FRIENDS',
      value,
      onChange: this.onChange
    }
    return (
      <div>
        <div>
          <Autosuggest
            theme={style}
            multiSection
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            onSuggestionSelected={this.onSuggestionSelected}
            inputProps={inputProps}
        />
        </div>
        <div>
          {
        this.state.showButton && (
          <button
            style={hover ? buttonHover : button}
            onMouseEnter={() => this.toggleHover()}
            onMouseLeave={() => this.toggleHover()}
            onClick={this.handleClick}>
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
