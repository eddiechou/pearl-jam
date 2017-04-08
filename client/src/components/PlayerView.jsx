import React from 'react';
var Iframe = require('react-iframe');

export default class PlayerView extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <h1>Player View!</h1>
        <Iframe url="https://pearl-jam-game-server.herokuapp.com/" width="915" height="615"/>
      </div>
    );
  }
}