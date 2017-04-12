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

    }
  }
  showModal(){
      this.refs.modal.show();
  }

  hideModal(){
      this.refs.modal.hide();
  }

  render () {
    var modalStyle = {
      width: '1500px',
      height: '850px',
    };  
    return (
      
      <div className="containerBuilt">
          <h1 className="navBar"> Nav Bar </h1> 
          <div id='gameView'>
            <div>
                <List />
                <button onClick={this.showModal.bind(this)}>Open</button>

                
                <Modal ref="modal" modalStyle={modalStyle}>
                    <button onClick={this.hideModal.bind(this)}>Close</button>
                    <div style={{backgroundColor: 'red', height: '850px', width: '1500px'}} />
                    {/*<iframe src="https://www.w3schools.com" height="700px" width="1700px"></iframe>*/}
                </Modal>8
            </div>


          </div> 
      </div>
    )
  }
}
