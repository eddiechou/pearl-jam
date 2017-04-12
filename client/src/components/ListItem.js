import React, { Component } from 'react';


//rquire css styles
var styles = require('./componentCSS').listItemStyle;
class ListItem extends Component {
  constructor(props) {
    super(props);

    
  }
  render() {
    const itemStyle = {
      width:  '1100px',
      height: '150px',
      borderRadius: '10px',
      backgroundColor: '#c0c0c0',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/assault.png")'
    }

    return (
        <div style={this.props.style} onClick={this.props.changeRoom} >
           <h1 style={{textAlign: 'center'}} > {this.props.name} </h1>
        </div>    
    );
  }
}


export default ListItem;