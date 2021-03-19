import React, { Component } from "react";
import Calculator from "./Calculator";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInput: "",
      operators: "",
      secondInput: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { firstInput, operators, secondInput } = this.state;
    const operatorsArr = ["=", "+", "-", "*", "/", "."];
    const key = e.target.children[0].innerHTML;

    // Clear
    if (key === "C") {
      this.setState({
        firstInput: "",
        operators: "",
        secondInput: "",
      });
    }

    if (firstInput && operators) {
      if (!isNaN(parseInt(key)) || key === "-") {
        this.setState((state) => ({
          secondInput: state.secondInput + key,
        }));
      }
    } else {
      // First Input is empty
      if (!firstInput) {
        // Check if key is number or minus (because we want that user is able to enter negative first value)
        if (!isNaN(parseInt(key)) || key === "-") {
          this.setState({
            firstInput: key,
          });
        }
      }
      // First Input is filled
      else if (firstInput) {
        if (!isNaN(parseInt(key))) {
          this.setState((state) => ({
            firstInput: state.firstInput + key,
          }));
        } else if (operatorsArr.indexOf(key) !== -1) {
          this.setState({
            operators: key,
          });
        }
      }
    }

    console.log(this.state);
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
