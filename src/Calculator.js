import React from "react";
import Display from "./Display";
import Footer from "./Footer";
import "./Calculator.scss";

export default function Calculator({
  firstInput,
  operators,
  secondInput,
  handleClick,
}) {
  let displayEverything = `${firstInput}${operators}${secondInput}`;

  const buttons = [
    { id: "zero", content: 0 },
    { id: "one", content: 1 },
    { id: "two", content: 2 },
    { id: "three", content: 3 },
    { id: "four", content: 4 },
    { id: "five", content: 5 },
    { id: "six", content: 6 },
    { id: "seven", content: 7 },
    { id: "eight", content: 8 },
    { id: "nine", content: 9 },
    { id: "equals", content: "=" },
    { id: "add", content: "+" },
    { id: "subtract", content: "-" },
    { id: "multiply", content: "*" },
    { id: "divide", content: "/" },
    { id: "decimal", content: "." },
    { id: "clear", content: "C" },
  ];

  const buttonsDivs = buttons.map((x) => (
    <div
      id={x.id}
      className="calculator-button"
      key={x.id}
      onClick={handleClick}
    >
      <p>{x.content}</p>
    </div>
  ));
  return (
    <div className="calculator">
      <Display
        displayEverything={displayEverything ? displayEverything : "0"}
      />
      {buttonsDivs}
      <Footer />
    </div>
  );
}
