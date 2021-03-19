import React from "react";
import "./Display.scss";

export default function Display({ displayEverything }) {
  return (
    <div id="display">
      <p>{displayEverything}</p>
    </div>
  );
}
