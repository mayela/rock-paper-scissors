import React from "react";
import "./index.css";

class Results extends React.Component {
  render() {
    return (
      <div>
        <div className="result-header">
          <p>Me</p>
          <p>Machine</p>
        </div>
        <div className="result-content">
          <p>0</p>
          <p>0</p>
        </div>
      </div>
    );
  }
}

export default Results;
