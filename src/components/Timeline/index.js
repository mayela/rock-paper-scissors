import React from "react";
import "./styles.css";

import MiniButton from "../MiniButton";

class Timeline extends React.Component {
  render() {
    return (
      <div>
        <MiniButton />
        <div className="line"></div>
        <MiniButton />
      </div>
    );
  }
}

export default Timeline;
