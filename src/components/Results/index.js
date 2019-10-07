import React from "react";
import "./index.css";

class Results extends React.Component {
  render() {
    return (
      <div className="results-table">
        <div className="result-me">
          <p>Me</p>
          <p id="result-me">0</p>
        </div>
        <div className="result-machine">
          <p>Machine</p>
          <p id="result-machine">0</p>
        </div>
      </div>
    );
  }
}

export default Results;
