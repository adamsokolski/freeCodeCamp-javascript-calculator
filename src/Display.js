import React from "react";
import "./Display.scss";

export default function Display({ input }) {
  return (
    <div id="display">
      <p>{input}</p>
    </div>
  );
}
