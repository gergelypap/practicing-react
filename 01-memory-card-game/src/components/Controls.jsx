import React, { Component } from "react";
import "./Controls.css";

export default class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <div>{this.props.time}</div>
      </div>
    );
  }
}
