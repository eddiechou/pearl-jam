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

      // Copy games that are in-progress to currentActiveGames
      var currentActiveGames = {}
      Object.keys(games).map((key) => { 
        if (games[key].status === 'in-progress') {
          currentActiveGames[key] = Object.assign({}, games[key]);
        }
      });

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
    const { currentActiveGames } = games
    return (
      <div>
        <UserNavBar />
        <h1>Bet on your favorite Pearl Jam players and win Pearls!</h1>
        <div>
          <p>There are currently <strong>{currentActiveGames && Object.keys(currentActiveGames).length || 0}</strong> active games!</p>
        </div>
        {currentActiveGames ? Object.keys(currentActiveGames).map((key, index) => {
          const game = currentActiveGames[key]

          return <CurrentGameCard game={game} key={index} gameID={key} index={index + 1}/>
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
