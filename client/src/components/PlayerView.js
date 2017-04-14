import React from 'react'
import Iframe from 'react-iframe'
import List from './List.js';
require('../assets/css/styles.css')

import Picker from'react-picker'

var Modal = require('boron/OutlineModal');

export default class PlayerView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: 'jeff is eating a burrito'
    }
    
  }

  componentDidMount() {
  }

  showModal(){
      this.refs.modal.show();

      setTimeout(this.fireMessage.bind(this), 1000);
  }

  hideModal(){
      this.refs.modal.hide();
  }


  fireMessage() {
    var iframeElement = document.getElementById('playerView').contentWindow;
    console.log('iframe', iframeElement);
    iframeElement.postMessage(this.state.username, 'http://10.6.64.169:3005')
    console.log('finished posting message');
  }

  render () {
    var modalStyle = {
      width: '1500px',
      height: '850px',
    }; 

    var buttonStyle = {
      width: '400px',
      height: '100px',
      marginTop: '40px',

      //For text
      fontSize: '30px',
      borderRadius: '20px'
    } 

    var flexParent = {
      'display': 'flex',
      'justifyContent': 'center',
      'flexDirection': 'column',
      'alignItems': 'center',
    }
    return (
      
      <div className="containerBuilt">
          <h1 className="navBar"> Nav Bar </h1> 
          <div id='gameView'>
            <button style={buttonStyle} onClick={this.fireMessage.bind(this)}> post message to iframe </button>

            <div style={flexParent} >
                <List />

                <button style={buttonStyle} onClick={this.showModal.bind(this)}>Join Server!</button>
                <Modal ref="modal" modalStyle={modalStyle}>
                    <iframe id='playerView' src="http://10.6.64.169:3005" height="700px" width="1700px"></iframe>
                    <button onClick={this.hideModal.bind(this)}>Close</button>
                </Modal>
            </div>


          </div> 
      </div>
    )
  }
}
