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
    const key = e.target.innerText;

    // Clear
    if (key === "C") {
      this.setState({
        firstInput: "",
        operators: "",
        secondInput: "",
      });
    } else if (!isNaN(parseInt(key))) {
      // Numbers
      if (this.state.operators === "") {
        this.setState((state) => ({
          firstInput: state.firstInput + key,
        }));
      } else {
        this.setState((state) => ({
          secondInput: state.secondInput + key,
        }));
      }
    } else if (key === ".") {
      // Float point
      if (!this.state.firstInput.includes(".")) {
        this.setState((state) => ({
          firstInput: state.firstInput + key,
        }));
      }
    } else if (key === "=") {
      // Result
      if (this.state.firstInput !== "" && this.state.secondInput !== "") {
        let result = 0;
        let firstNumber = parseInt(this.state.firstInput);
        let secondNumber = parseInt(this.state.secondInput);
        switch (this.state.operators) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "-":
            result = firstNumber - secondNumber;
            break;
          case "*":
            result = firstNumber * secondNumber;
            break;
          case "/":
            result = firstNumber / secondNumber;
            break;
        }
        this.setState({
          firstInput: result,
          operators: "",
          secondInput: "",
        });
      }
    } else {
      this.setState({
        operators: key,
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
