import Options from "../Options";
import Results from "../Results";
import Timeline from "../Timeline";
import Title from "../Title";
import React from "react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: { me: 0, machine: 0 } };
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Options />
        <Results results={this.state.results} />
        <Timeline />
      </div>
    );
  }
}

export default App;
