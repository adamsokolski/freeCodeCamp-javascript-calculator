import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
    };
  }

  render() {
    return (
      <div className="App">
        <Calculator input={this.state.input} />
      </div>
    );
  }
}
