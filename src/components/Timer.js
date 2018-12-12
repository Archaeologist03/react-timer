import React from "react";

import formatTime from "./formatTimeHelper";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerTime: 0,
    };
  }

  // Methods for start and reset time. 
  incTime() {
    this.setState(prevState => ({
      timerTime: prevState.timerTime + 1,
    }));
  }
  resetTime() {
    this.setState(prevState => ({
      timerTime: 0,
    }));
  }

  // Based on which btn is clicked app state changes and affects this component updating.
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.appState.pause === false &&
      prevState.timerTime === this.state.timerTime &&
      prevProps.appState.pause !== this.props.appState.pause
    ) {
      this.interval = setInterval(() => this.incTime(), 10);
      console.log(prevProps.appState);
    }
    if (this.props.appState.pause) {
      clearInterval(this.interval);
    }
    if (
      this.props.appState.reset &&
      prevProps.appState.reset !== this.props.appState.reset
    ) {
      this.resetTime();
    }
  }

  // Renders just timer, formated with helper func
  render() {
    return (
      <div className="timer-container">
        <h3 className="time">{formatTime(this.state.timerTime)}</h3>
      </div>
    );
  }
}

export default Timer;
