import React from "react";

import formatTime from "./formatTimeHelper";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerTime: 0,
    };
  }

  incTime() {
    this.setState(prevState => ({
      timerTime: prevState.timerTime + 1,
    }));
  }

  eraseTime() {
    this.setState(prevState => ({
      timerTime: 0,
    }));
  }
  // shouldComponentUpdate() {
  //   if (this.props.pause) {
  //     return false;
  //   }
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.appState.pause === false &&
      prevState.timerTime === this.state.timerTime
    ) {
      this.interval = setInterval(() => this.incTime(), 10);
    }
    if (this.props.appState.pause) {
      clearInterval(this.interval);
    }
    if (this.props.appState.reset) {
      clearInterval(this.interval);

      this.eraseTime()

    }
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="timer-container">
        <h3 className="time">{formatTime(this.state.timerTime)}</h3>
      </div>
    );
  }
}

export default Timer;
