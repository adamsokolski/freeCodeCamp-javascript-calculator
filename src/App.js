import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInput: "asda",
      operators: "",
      secondInput: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const key = e.target.innerText;

    // Clear
    if (key === "C") {
      this.setState({
        firstInput: "",
        operators: "",
        secondInput: "",
      });
    }
  }

  render() {
    const { firstInput, operators, secondInput } = this.state;
    return (
      <div className="App">
        <Calculator
          firstInput={firstInput}
          operators={operators}
          secondInput={secondInput}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
