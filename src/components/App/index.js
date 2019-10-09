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
      history: [],
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

  async setHistory(option) {
    const result = await this.move(option);
    const history = this.state.history;
    history.push(result);
    this.setState({ history: history });
  }

  handleClick(option) {
    this.setHistory(option);
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Options onClick={this.handleClick("R")} />
        <Results results={this.state.results} />
        <Timeline />
      </div>
    );
  }
}

export default App;
