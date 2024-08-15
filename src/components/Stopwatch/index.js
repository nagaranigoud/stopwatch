// Write your code here
import {components} from 'react'

import './index.css'

class Stopwatch extends components {
  state = {isRunningTime: false, elipsedTimer: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isRunningTime: false, elipsedTimer: 0})
  }

  onUpdateTimer = () => {
    this.setState(prevState => ({elipsedTimer: prevState.elipsedTimer + 1}))
  }

  onStopTimer = () => {
    this.setState({isRunningTime: false})
    clearInterval(this.timeInterval)
  }

  onStartTimer = () => {
    this.setState({isRunningTime: true})
    this.timeInterval = setInterval(this.onUpdateTimer, 1000)
  }

  getSeconds = () => {
    const {elipsedTimer} = this.state
    const seconds = Math.floor(elipsedTimer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  getMinutes = () => {
    const {elipsedTimer} = this.state
    const minutes = Math.floor(elipsedTimer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isRunningTime} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="main-app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="icon-container">
            <img
              className="watch-icon"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="stop-watch">{time}</h1>
          <div className="button-container">
            <button
              className="btn start-btn"
              onClick={this.onStartTimer}
              disabled={isRunningTime}
              type="button"
            >
              Start
            </button>
            <button
              className="btn stop-btn"
              onClick={this.onStopTimer}
              type="button"
            >
              Stop
            </button>
            <button
              className="btn reset-btn"
              onClick={this.resetTimer}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
