import Options from "../Options";
import Results from "../Results";
import Timeline from "../Timeline";
import Title from "../Title";
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Options />
      <Results />
      <Timeline />
    </div>
  );
}

export default App;
