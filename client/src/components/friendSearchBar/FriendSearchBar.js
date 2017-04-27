import React, { Component } from 'react'
import { connect } from 'react-redux'

/* * Utils * */
import { getFriends, getUsers } from '../../base'

/* * Actions * */
import { setBaseUsers } from '../../actions/userActions'

/* * Components * */
import Autosuggest from 'react-autosuggest'

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
  if (section.category === 'Friends') {
    const { sectionDiv } = style
    return (
      <div>
        <br />
        <br />
        <div style={sectionDiv} />
        <br />
      </div>
    )
  }
  return (
    <div>
      <br />
      <br />
    </div>
  )
}

class FriendsSearchBar extends Component {
  constructor () {
    super()

    this.state = {
      value: '',
      id: null,
      suggestions: [],
      hover: false
    }
    this.userCategories = [
      {
        category: 'Members',
        users: []
      },
      {
        category: 'Friends',
        users: []
      }
    ]
    this.getSuggestions = this.getSuggestions.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  componentWillMount () {
    const { setBaseUsers } = this.props
    const getFriendsPromise = getFriends
    const getUsersPromise = getUsers()
    const friendsArray = []
    const usersArray = []

    const initFriendsArray = (friends) => {
      for (let id in friends) {
        const { displayName } = friends[id]
        const friend = { id, displayName, color: '#ffffff', categoryID: 1 }
        friendsArray.push(friend)
      }
    }

    
    const initUsersArray = (users, friends) => {
      for (let id in users) {
        const { displayName } = users[id]
        const user = { id, displayName, color: '#f3b6d0', categoryID: 0 }
        !friends && usersArray.push(user)
        friends && !friends[id] && usersArray.push(user)
      }
    

      try {
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
        setBaseUsers({ usersArray, friendsArray })
      })
    .catch(error => console.log(error))

      } catch (e) {
        console.log('get firneds promise', e);
      }
    }
   
   

  }

  onChange (event, { newValue }) {
    const { getStateThroughProps } = this.props
    getStateThroughProps(false)
    this.setState({ value: newValue })
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
    const { user } = this.props
    const { userCategories } = user
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
    const { id, displayName, categoryID } = suggestion
    const { getStateThroughProps } = this.props
    getStateThroughProps(true, displayName, id, categoryID)
  }

  render () {
    const { main } = style
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'FIND FRIENDS',
      value,
      onChange: this.onChange
    }
    return (
      <div style={main}>
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
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { setBaseUsers })(FriendsSearchBar)
