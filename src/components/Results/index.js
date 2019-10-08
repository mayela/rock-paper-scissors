import React from "react";
import "./index.css";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: { me: 0, machine: 0 } };
  }
  render() {
    return (
      <div className="results-table">
        <div className="points">
          <p>Me</p>
          <p className="number">{this.state.results["me"]}</p>
        </div>
        <div className="points">-</div>
        <div className="points">
          <p>Machine</p>
          <p className="number">{this.state.results["machine"]}</p>
        </div>
      </div>
    );
  }
}

export default Results;
