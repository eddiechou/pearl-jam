import React, { Component } from 'react';
//Other components
import ListItem from './ListItem'

//Redux stuff
import {connect} from 'react-redux'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [
        {name: 'Game Server 1', link: ''},
        {name: 'Game Server 2', link: ''},
        {name: 'Game Server 3', link: ''},
        {name: 'Game Server 4', link: ''},
      ]
    }
  } 

  addClasses() {
   this.setState({
     classes: 'hvr-pulse'
   }) 
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
      height: '550px',
      'overflow-y' : 'scroll',
      display: 'fixed'
    }
   return (
      <div style={listStyle} >
        {
          this.state.servers.map((server) => {
            return <ListItem key={server.name} name={server.name}  />
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servers: state.rooms
  }
}


export default connect(mapStateToProps)(List);