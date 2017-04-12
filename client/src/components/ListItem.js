import React, { Component } from 'react';


//rquire css styles
var styles = require('./componentCSS').listItemStyle;
class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemStyle: styles.itemStyleNonClicked 
    }
  }
  render() {
    console.log('styles', styles);
    const itemStyle = {
      width:  '1100px',
      height: '150px',
      borderRadius: '10px',
      backgroundColor: '#c0c0c0',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/assault.png")'
    }

    return (
        <div style={this.state.itemStyle} onClick={() => {this.setState({itemStyle: styles.itemStyleClicked})}} >
           <h1 style={{textAlign: 'center'}} > Game Server 1 </h1>
        </div>    
    );
  }
}


export default ListItem;