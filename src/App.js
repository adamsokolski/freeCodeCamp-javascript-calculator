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
    this.calculateResult = this.calculateResult.bind(this);
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
        // Prevent from inputing zeros at the start
        if (this.state.firstInput === "0" && key === "0") {
          this.setState({
            firstInput: "0",
          });
        } else if (this.state.firstInput === "0") {
          this.setState({
            firstInput: key,
          });
        } else {
          this.setState((state) => ({
            firstInput: state.firstInput + key,
          }));
        }
      } else {
        // Prevent from inputing zeros at the start
        if (this.state.secondInput === "0" && key === "0") {
          this.setState({
            secondInput: "0",
          });
        } else if (this.state.secondInput === "0") {
          this.setState({
            secondInput: key,
          });
        } else {
          this.setState((state) => ({
            secondInput: state.secondInput + key,
          }));
        }
      }
    } else if (key === ".") {
      // Float point
      if (this.state.operators === "") {
        if (!this.state.firstInput.includes(".")) {
          this.setState((state) => ({
            firstInput: state.firstInput + key,
          }));
        }
      } else {
        if (!this.state.secondInput.includes(".")) {
          this.setState((state) => ({
            secondInput: state.secondInput + key,
          }));
        }
      }
    } else if (key === "=") {
      // Result
      if (this.state.firstInput !== "" && this.state.secondInput !== "") {
        let result = this.calculateResult(
          this.state.firstInput,
          this.state.secondInput,
          this.state.operators
        );
        this.setState({
          firstInput: result,
          operators: "",
          secondInput: "",
        });
      }
    } else if (["+", "-", "*", "/"].indexOf(key) !== -1) {
      // Operators
      // First number can be negative

      if (
        this.state.firstInput !== "" &&
        this.state.operators !== "" &&
        this.state.secondInput !== "" &&
        this.state.secondInput !== "-"
      ) {
        let result = this.calculateResult(
          this.state.firstInput,
          this.state.secondInput,
          this.state.operators
        );
        this.setState({
          firstInput: result,
          operators: key,
          secondInput: "",
        });
      } else if (
        this.state.firstInput !== "" &&
        this.state.firstInput !== "-"
      ) {
        if (this.state.operators === "") {
          this.setState({
            operators: key,
          });
        } else if (key === "-") {
          this.setState({
            secondInput: key,
          });
        } else if (this.state.operators !== "") {
          this.setState({
            operators: key,
            secondInput: "",
          });
        }
      } else if (this.state.firstInput === "" && key === "-") {
        this.setState({
          firstInput: key,
        });
      } else if (this.state.firstInput === "-" && key === "+") {
        this.setState({
          firstInput: "",
        });
      }
    }
  }

  calculateResult(firstNumber, secondNumber, operator) {
    let result = 0;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operator) {
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
      default:
        break;
    }
    return result.toString();
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
