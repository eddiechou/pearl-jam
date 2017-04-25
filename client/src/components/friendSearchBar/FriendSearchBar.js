import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { getFriends, getUsers, addFriend } from '../../base'

/* * Styles * */
import style from './friendSearchBar-css'

const getSuggestionValue = (suggestion) => suggestion.displayName

const getSectionSuggestions = (section) => section.users

const renderSuggestion = (suggestion) => (
  <div>
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
    const { container, input, inputFocused, inputMsClear, inputOpen, suggestionsContainer, suggestionsContainerOpen, suggestionsList, suggestion, suggestionHighlighted } = style

    this.theme = {
      container: container,
      input: input,
      inputFocused: inputFocused,
      inputMsClear: inputMsClear,
      inputOpen: inputOpen,
      suggestionsContainer: suggestionsContainer,
      suggestionsContainerOpen: suggestionsContainerOpen,
      suggestionsList: suggestionsList,
      suggestion: suggestion,
      suggestionHighlighted: suggestionHighlighted
    }
    this.state = {
      showButton: false,
      value: '',
      id: null,
      suggestions: []
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
    this.onClick = this.onClick.bind(this)
  }

  componentWillMount () {
    try {
      const getFriendsPromise = getFriends()
      const getUsersPromise = getUsers()

      const initFriendsArray = (friends) => {
        for (let id in friends) {
          const { displayName } = friends[id]
          const friend = { id, displayName }
          this.userCategories[0].users.push(friend)
        }
      }


    const initUsersArray = (users, friends) => {
      for (let id in users) {
        const { displayName } = users[id]
        const nonFriend = { id, displayName }
        !friends && this.userCategories[1].users.push(nonFriend)
        friends && !friends[id] && this.userCategories[1].users.push(nonFriend)
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
   } catch (e) {
    console.log('e', e);
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

  onClick () {
    const { id, value } = this.state
    const user = { id, displayName: value }
    this.userCategories[1].users = updateUsersArray(this.userCategories[1].users, id)
    this.userCategories[0].users.push(user)
    this.setState({ showButton: false, value: '', id: null })
    addFriend(user)
  }

  render () {
    const { button } = style
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'FIND FRIENDS',
      value,
      onChange: this.onChange
    }
    return (
      <div>
        <div>
          <Autosuggest
            theme={this.theme}
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
