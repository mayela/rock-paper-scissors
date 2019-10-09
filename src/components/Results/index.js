import React from "react";
import "./index.css";

export default function Results(props) {
  return (
    <div className="results-table">
      <div className="points">
        <p>Me</p>
        <p className="number">{props.results.me}</p>
      </div>
      <div className="points">-</div>
      <div className="points">
        <p>Machine</p>
        <p className="number">{props.result.machine}</p>
      </div>
    </div>
  );
}
