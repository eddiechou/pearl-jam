import React, { Component } from 'react';
//Other components
import ListItem from './ListItem'

//Redux stuff
import {connect} from 'react-redux'
import {CLICKED_ROOM } from '../actions/actionTypes'
//import styles
var styles = require('./componentCSS').listItemStyle;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  } 

  addClasses() {
   this.setState({
     classes: 'hvr-pulse'
   }) 
  }

  changeRoom(serverName) {
    console.log('trying to change rooms');
  }
  render() {
    const itemStyle = {
      width:  '1100px',
      height: '150px',
      // backgroundColor: '#654321',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/bright-squares.png")',
      borderRadius: '10px',
       
    }
    const listStyle = {
      width: '1100px',
      height: '700px',
      overflowY : 'scroll',
      display: 'fixed'
    }
   return (
      <div style={listStyle} >
        {
          this.props.servers.map((server) => {
            return <ListItem style={server.clicked ? styles.itemStyleClicked : styles.itemStyleNonClicked}
             key={server.name} name={server.name}  
             changeRoom={() => this.props.onRoomSelect(server.name)}  />
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRoomSelect: (serverName) => {
      dispatch({type: CLICKED_ROOM, name: serverName});
    }
  }
}

const mapStateToProps = (state) => {
  return {
    servers: state.rooms
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);