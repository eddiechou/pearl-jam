import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { firebaseApp } from '../../base'

/* * Components * */
import TestNavBar from '../testNavBar/TestNavBar'
import UserNavBar from '../userNavBar/UserNavBar'
import CurrentGameCard from '../currentGameCard/CurrentGameCard'

/* * Actions * */
import { updateCurrentActiveGames } from '../../actions/gameActions'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'

const base = firebaseApp.database()

class BettingPage extends Component {
  componentWillMount () {
    const { updateCurrentActiveGames } = this.props
    // Call firebase to grab all games that are in-progress
    var allGamesRef = base.ref('games/')
    // On every change to games, client will be notified
    allGamesRef.on('value', function (snapshot) {
      var games = snapshot.val()
      var gamesArray = Object.keys(games).map((key) => { return games[key] })
      var currentActiveGames = gamesArray.filter(function (game) {
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
    return (
      <div>
        <UserNavBar />
        <h1>Bet on your favorite Pearl Jam players and win Pearls!</h1>
        <div>
          <p>There are currently <strong>{(games.currentActiveGames && games.currentActiveGames.length) || 0}</strong> active games!</p>
        </div>
        {games.currentActiveGames ? games.currentActiveGames.map((game, index) => {
            return <CurrentGameCard game={game} key={index} i={index}/>
          }) : null}
        <TestNavBar />
      </div>
    )
  }
}

// Will pass currentActiveGames from the store as props to BettingPage
const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { updateCurrentActiveGames })(BettingPage)
