import React from "react";

import Timer from "./Timer";

import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      pause: true,
      reset: false,

    };
    this.handleUpdateTime = this.handleUpdateTime.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.pause !== this.state.pause) {
  //     this.setState({
  //       time: 0,
  //     })
  //   }
  // }



  handleUpdateTime() {
    if (this.state.pause === false) {
      let counter = this.state.time;
      var interval = setInterval(() => {
        counter++;
        this.setState({ time: counter });
      }, 1110);
    } else if (this.state.reset) {
      clearInterval(interval);
      this.setState({ time: 0 });
    }
  }

  handleStartClick() {
    this.setState({
      pause: false,
      reset: false,
    });
  }
  handlePauseClick() {
    this.setState({
      pause: true,
      reset: false,
    });
  }
  handleResetClick() {
    this.setState({
      pause: true,
      reset: true,
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <h1>React Timer</h1>
        <div className="box-container">
          <Timer appState={this.state}/>
          <div className="controls-container">
            <h4 onClick={this.handleStartClick} className="control-item">
              Start
            </h4>
            <h4  onClick={this.handlePauseClick} className="control-item">Pause</h4>
            <h4 onClick={this.handleResetClick} className="control-item">Reset</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
