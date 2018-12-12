import React from "react";

import Timer from "./Timer";
import RadiantTitle from './RadiantTitle';

import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pause: true,
      reset: false,
    };
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  // Methods that triggers Timer component behavior by changing app state. Starting timer, Pausing timer, Reseting timer.
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


  // Renders everthing. Timer component, 3 btns that control Timer behavior.
  render() {
    return (
      <div className="container">
        <RadiantTitle>React Timer</RadiantTitle>
        <div className="box-container">
          <Timer appState={this.state} />
          <div className="controls-container">
            <h4 onClick={this.handleStartClick} className="control-item">
              Start
            </h4>
            <h4 onClick={this.handlePauseClick} className="control-item">
              Pause
            </h4>
            <h4 onClick={this.handleResetClick} className="control-item">
              Reset
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
