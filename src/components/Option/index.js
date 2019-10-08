import React from "react";
import "./index.css";
import Image from "./../Image";

class Option extends React.Component {
  constructor(props) {
    super(props);
  }

  callMachine(option) {
    const url = `https://smartplay.afiniti.com/v1/play/${option}`;
    const options = { method: "GET" };
    const response = fetch(url, options);
    const data = response.json();
    const machineResult = data["nextBestMove"];
    return machineResult;
  }

  render() {
    return (
      <button
        className={`button ${this.props.type}`}
        onClick={() => callMachine("R")}
      >
        <Image
          option={true}
          image={this.props.image}
          altText={this.props.altText}
        />
      </button>
    );
  }
}

export default Option;
