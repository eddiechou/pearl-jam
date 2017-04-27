import React, { Component } from 'react'
import { firebaseApp } from '../../base'
/* * Styles * */
import style from './testNavBar-css'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'


const Authors = () => {
  const { bar, button, text } = style
  return (
    <Toolbar style={bar}>
      <h2 style={text}>Mycah</h2>
      <h2 style={text}>Jeff</h2>
       
      <h2 style={text}>Eddie</h2>
      <h2 style={text}>Mike</h2>
      
    </Toolbar>
  )
}

export default Authors 
