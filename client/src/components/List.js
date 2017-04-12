import React, { Component } from 'react';
//Other components
import ListItem from './ListItem'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ''
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
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    );
  }
}

export default List;