import './App.css'
import React, { Component } from 'react'
import Clock from './Clock'

export default class App extends Component {
  formatTime = seconds => {
    return new Date(1000 * seconds).toISOString().substr(11, 8)
  }

  render() {
    return <Clock formatTime={seconds => this.formatTime(seconds)} />
  }
}
