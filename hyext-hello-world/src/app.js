import React from 'react'
import { render } from 'react-dom'
import Avatar from './components/Avatar'
import './assets/scss/common.scss'

render(
  <div className="app">
    <Avatar/>
    <h1>Welcome to Your React.js Ext App</h1>
    <h2>Client side</h2>
  </div>,
  document.getElementById('root')
)