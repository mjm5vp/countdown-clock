import React, { Component } from 'react'
import './Clock.css'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

export default class Clock extends Component {
  state = {
    timeStart: null,
    seconds: 0
  }

  startTimer = () => {
    if (!this.state.timer) {
      this.setState({
        timer: setInterval(this.tick, 1000)
      })
    }
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({ timer: null })
  }

  tick = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 })
    } else {
      this.stopTimer()
    }
  }

  changeTime = event => {
    const { value } = event.target
    this.setState({ seconds: value, timeStart: value })
  }

  render() {
    return (
      <div className="container">
        <div>
          <FormControl
            type="number"
            placeholder="Enter Time in Seconds"
            value={this.state.timeStart}
            onChange={this.changeTime}
          />
          Seconds
        </div>

        <Button onClick={this.startTimer}>Start</Button>
        <Button onClick={this.stopTimer}>Stop</Button>
        {this.props.formatTime(this.state.seconds)}
      </div>
    )
  }
}
