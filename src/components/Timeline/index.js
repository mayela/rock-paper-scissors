import React from "react";
import "./styles.css";

import MiniButton from "../MiniButton";

class Timeline extends React.Component {
  render() {
    return (
      <div>
        <div className="timeline-entry">
          <MiniButton />
          <div className="line"></div>
          <MiniButton />
        </div>
        <div className="timeline-entry">
          <MiniButton />
          <div className="line"></div>
          <MiniButton />
        </div>
      </div>
    );
  }
}

export default Timeline;
