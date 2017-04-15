import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Actions * */
import firebase from '../../base'

/* * Actions * */
import { updateCurrentActiveGames } from '../../actions/betActions'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'
import CurrentGameCard from './CurrentGameCard'

class BettingPage extends Component {
  componentWillMount () {
    const { updateCurrentActiveGames } = this.props
    // Call firebase to grab all games that are in-progress
    var allGamesRef = firebase.database().ref('games/')
    // On every change to games, client will be notified
    allGamesRef.on('value', function (snapshot) {
      var games = snapshot.val()
      var currentActiveGames = games.filter(function (game) {
        return game && game.status === 'in-progress'
      })

      // Update the redux-store
      updateCurrentActiveGames({currentActiveGames})
    })
  }

  checkProps () {
    console.log(this.props)
  }

  // For each currentActiveGame 
  render () {
    const { games } = this.props
    return <div>
        <h1>Bet on your favorite Pearl Jam players and win Pearls!</h1>
        <div>
          <p>There are currently <strong>{games.currentActiveGames && games.currentActiveGames.length}</strong> active games!</p>
        </div>

        {games.currentActiveGames ? games.currentActiveGames.map((game) => {
                return <CurrentGameCard game={game}/>
              }) : null}
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
