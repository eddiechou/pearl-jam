import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Utils * */
import { firebaseApp } from '../../base'

/* * Components * */
import TestNavBar from '../testNavBar/TestNavBar'
import UserNavBar from '../userNavBar/UserNavBar'
import CurrentGameCard from '../currentGameCard/CurrentGameCard'
import Author from '../Authors/Authors.js'

/* * Actions * */
import { updateCurrentActiveGames } from '../../actions/gameActions'

/* * Styles * */
import FlatButton from 'material-ui/FlatButton'
import { titleStyle, customMuiTheme } from './bettingPage-css.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const base = firebaseApp.database()

class BettingPage extends Component {
  componentWillMount () {
    const { updateCurrentActiveGames } = this.props
    // Call firebase to grab all games that are in-progress
    var allGamesRef = base.ref('games/')
    allGamesRef.on('value', function (snapshot) {
      var games = snapshot.val()

      var currentActiveGames = {}
      Object.keys(games).map((key) => {
        // Grab currently active games (status: 'in-progress')
        if (games[key].status === 'in-progress') {
          currentActiveGames[key] = Object.assign({}, games[key])
        }
      })

      updateCurrentActiveGames({currentActiveGames})
    })
  }

  checkProps () {
    console.log(this.props)
  }

  render () {
    const { games } = this.props
    const { currentActiveGames } = games
   
    return (
      <MuiThemeProvider muiTheme={customMuiTheme}>
        <div style={{backgroundColor: 'pink', height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
          <UserNavBar />
          <div style={{flex: 1}}>
            <h1 style={titleStyle}>SPECTATOR PORTAL</h1>
            <div>
              <p style={{textAlign: 'center', marginBottom: '75px'}}>SPECTATE YOUR FAVORITE PLAYERS, MAKE BETS, AND WIN BIG!</p>
              <p style={{textAlign: 'center', marginBottom: '75px'}}>THERE ARE CURRENTLY <strong>{currentActiveGames && Object.keys(currentActiveGames).length || 0}</strong> ACTIVE GAMES BEING PLAYED!</p>
            </div>
            {currentActiveGames ? Object.keys(currentActiveGames).map((key, index) => {
              const game = currentActiveGames[key]
              return <CurrentGameCard game={game} key={index} gameID={key} index={index + 1} />
            }) : null}
          </div>
          <Author/>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ games }) => {
  return { games }
}

export default connect(mapStateToProps, { updateCurrentActiveGames })(BettingPage)
