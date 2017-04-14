import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import firebase from '../../base'

export default class BettingPage extends Component {
  constructor () {
    super()
  }

  componentWillMount () {

    // Call firebase to grab all games that are in-progress
    var allGamesRef = firebase.database().ref('games/');
    // On every change to games, client will be notified
    allGamesRef.on('value', function(snapshot) {
      var games = snapshot.val();
      console.log(games);
      for (var i = 0; i < games.length; i++) {
        if (games[i]) {
          if (games[i].status === 'in-progress') {
            console.log('in-progress: game with players', games[i].players)
          }
        }
      }
    })



    // TODO: Send an action to the Redux reducer to update the state
    // 

  }

  render () {
    // const {currentGamesInProgress} = this.props
    // console.log('rendering bet page');
    // // If no current games, tell that to the user
    // if (!currentGamesInProgress.length) {
    //   return <p>There are no games currently being played</p>
    // } else {
    //   return <p>Map each game in progress to some component here</p>
    // }

    return <p>We're in the betting page</p>
  }

}


// const mapStateToProps = ({ user }) => {
//   return { user }
// }

// export default connect(mapStateToProps, { setUsername })(SetUsernamePage)