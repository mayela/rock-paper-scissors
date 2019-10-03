import React from "react";
import "./index.css";

export default function Title() {
  return (
    <header className="Title">
      <h1>
        <span id="rock-color">Rock</span>
        <span id="paper-color">, Paper</span>
        <span id="scissors-color"> & Scissors</span>
      </h1>
    </header>
  );
}
