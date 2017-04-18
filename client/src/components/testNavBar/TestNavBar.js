import React, { Component } from 'react'
import { firebaseApp } from '../../base'
/* * Styles * */
import style from './testNavBar-css'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'

const auth = firebaseApp.auth()

const checkUser = () => {
  const user = auth.currentUser
  console.log(user)
}

const TestNavBar = () => {
  const { bar, button } = style
  return (
    <Toolbar style={bar}>
      <ToolbarGroup style={bar} firstChild />
      <ToolbarGroup>
        <button style={button} onClick={checkUser} > Check Firebase User </button>
      </ToolbarGroup>
    </Toolbar>
  )
}

export default TestNavBar
