import React, { Component } from "react";
import "./App.css";
import Board from "./Board";
import Controls from "./Controls";

export default class App extends Component {
  state = {
    difficulty: 6,
    time: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  onWin = () => {
    alert(`You won in ${this.state.time} seconds!`);
    this.setState({
      time: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Board difficulty={this.state.difficulty} onWin={this.onWin} />
        <Controls time={this.state.time} />
      </div>
    );
  }
}
