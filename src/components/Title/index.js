import React from "react";
import "./index.css";

export default function Title() {
  return (
    <header className="title">
      <h1>
        <span className="rock-color font-bold">Rock</span>
        <span className="paper-color font-bold">, Paper</span>
        <span className="scissors-color font-bold"> & Scissors</span>
      </h1>
      <div className="divider">
        <span className="ruler"></span>
      </div>
    </header>
  );
}
