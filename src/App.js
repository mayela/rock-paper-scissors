import { Options } from "./components/Options";
import { Results } from "./components/Results";
import { Timeline } from "./components/Timeline";
import { Title } from "./components/Title";
import React from "react";
import "./App.css";

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
