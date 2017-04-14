import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateCurrentActiveGames } from '../../actions/betActions'
import firebase from '../../base'
import FlatButton from 'material-ui/FlatButton'

class BettingPage extends Component {
  constructor () {
    super()
  }

  componentWillMount () {
    const { updateCurrentActiveGames } = this.props
    // Call firebase to grab all games that are in-progress
    var allGamesRef = firebase.database().ref('games/')
    // On every change to games, client will be notified
    allGamesRef.on('value', function(snapshot) {
      var games = snapshot.val()
      var currentActiveGames = games.filter(function(game) {
        return game && game.status === 'in-progress'
      });

      // Update the redux-store
      updateCurrentActiveGames({currentActiveGames})
    })
  }

  checkProps () {
    console.log(this.props)
  }

  render () {
    const { games } = this.props
    return <div>
        <p>We're in the betting page</p>
        <div><p>current active games: {games.currentActiveGames && games.currentActiveGames.length}</p></div>
        <FlatButton
          label='props'
          secondary
          fullWidth
          onClick={this.checkProps.bind(this)} />
      </div>
  }
}

// Will pass currentActiveGames from the store as props to BettingPage
const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { updateCurrentActiveGames })(BettingPage)