import Options from "../Options";
import Results from "../Results";
import Timeline from "../Timeline";
import Title from "../Title";
import React from "react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: { me: 0, machine: 0 },
      history: []
    };
  }

  async move(option) {
    const url = `https://smartplay.afiniti.com/v1/play/${option}`;
    const options = { method: "GET" };
    const response = await fetch(url, options);
    const data = await response.json();
    const machineResult = data["nextBestMove"];
    return { me: option, machine: machineResult };
  }

  setHistory(result) {
    const history = this.state.history;
    history.push(result);
    this.setState({ history: history });
  }

  setResults(results) {
    this.setState({ results: results });
  }

  decideWhoWin(result) {
    const results = this.state.results;
    if (result["me"] === result["machine"]) {
      console.log("No one wins");
    } else if (result["me"] === "R" && result["machine"] === "S") {
      results["me"] = results["me"] + 1;
    } else if (result["me"] === "S" && result["machine"] === "P") {
      results["me"] = results["me"] + 1;
    } else if (result["me"] === "P" && result["machine"] === "R") {
      results["me"] = results["me"] + 1;
    } else {
      results["machine"] = results["machine"] + 1;
    }
    this.setResults(results);
  }

  async handleClick(option) {
    console.log(option);
    const result = await this.move(option);
    this.setHistory(result);
    this.decideWhoWin(result);
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Options onClick={this.handleClick} />
        <Results results={this.state.results} />
        <Timeline />
      </div>
    );
  }
}

export default App;
