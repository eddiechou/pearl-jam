//require componenets
import React from 'react'
import Iframe from 'react-iframe'
import List from './List.js';

//Require stylesheet
require('/styles.css')

//REquire animation effect for modal
var Modal = require('boron/OutlineModal');

//redux stuff
import {connect} from 'react-redux'

//require lodash
import _ from 'lodash'

class PlayerView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      displayName: 'anonymous',
      currentServer: ''
  }

        
  }
  componentWillMount() {
    
    const username = prompt("What is your username?");
    this.setState({
      displayName: username
    })
    
  }

  getClickedServer() {
    for (let server of this.props.rooms) {
      if (server.clicked === true) {
        return server;
      }  
    }
    
    return 'no server selected!'
  }

  showModal(){
      var clickedServer = this.getClickedServer();
      console.log('clickedServer', clickedServer);
      this.setState({
        currentServer: clickedServer
      }, function() {
        console.log('currenterserver', this.state.currentServer);
        this.refs.modal.show();
        setTimeout(this.fireMessage.bind(this), 1000);
      })
  }

  hideModal(){
      this.refs.modal.hide();
  }


  fireMessage() {
    var iframeElement = document.getElementById('playerView').contentWindow;
    iframeElement.postMessage(this.state.displayName, this.state.currentServer.link);
    console.log('finished posting message');
  }

  render () {
    var modalStyle = {
      width: '950px',
      height: '800px',
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

            <div style={flexParent} >
                <List />

                <button style={buttonStyle} onClick={this.showModal.bind(this)}>Join Server!</button>
                <Modal ref="modal" modalStyle={modalStyle}>
                    <iframe id='playerView' src={this.state.currentServer.link} 
                    height="800px" width="950px"></iframe>
                    <button onClick={this.hideModal.bind(this)}>Close</button>
                </Modal>
            </div>


          </div> 
      </div>
    )
  }
}

const mapStateToProps = ({ rooms, user }) => {
  const { displayName } = user
  return { rooms, displayName }
}



export default connect(mapStateToProps)(PlayerView);
