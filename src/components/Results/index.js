import React from "react";
import "./index.css";

class Results extends React.Component {
  render() {
    return (
      <div className="results-table">
        <div className="points">
          <p>Me</p>
          <p className="number">0</p>
        </div>
        <div className="points">-</div>
        <div className="points">
          <p>Machine</p>
          <p className="number">0</p>
        </div>
      </div>
    );
  }
}

export default Results;
