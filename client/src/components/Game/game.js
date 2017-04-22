import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import UserNavBar from '../userNavBar/UserNavBar'

class Game extends React.Component {
	constructor (props) {
		super(props)
	}

  componentDidMount() {
    window.username = 'Jeff';

    let script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js";
    script.async = false;
    document.body.appendChild(script);

    let script1 = document.createElement("script");
    script1.src = "https://pearl-jam-game-server.herokuapp.com/client/js/dist/phaser.min.js";
    script1.async = false;
    document.body.appendChild(script1);

    let script2 = document.createElement("script");
    script2.src = "https://pearl-jam-game-server.herokuapp.com/socket.io/socket.io.js";
    script2.async = false;
    document.body.appendChild(script2);

    let script3 = document.createElement("script");
    script3.src = "https://pearl-jam-game-server.herokuapp.com/client/sockets/socket.js";
    script3.async = false;
    document.body.appendChild(script3);

    let script4 = document.createElement("script");
    script4.src = "https://pearl-jam-game-server.herokuapp.com/client/js/dist/deployment.js";
    script4.async = false;
    document.body.appendChild(script4);
  }

  render() {
    const { user } = this.props
    const { games } = this.props
    const { currentGame } = games
    return (
      <div>
        <UserNavBar />
        <div id="game">Please Wait, your game will show up momentarily! <br/>{user.displayName}, you are the current user<br/>, this is the game you are in</div>
      </div>
    )
  }
}

const mapStateToProps = ({ games, user }) => {
  return { games, user }
}

export default connect(mapStateToProps)(Game)