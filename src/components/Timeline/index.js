import React from "react";
import "./styles.css";

import TimelineEntry from "../TimelineEntry";
import MiniButton from "../MiniButton";

class Timeline extends React.Component {
  // Pass an array formated:
  // [
  // { "type": "rock", "image": RockImage },
  // { "type": "paper", "image": PaperImage },
  // { "type": "scissors", "image": ScissorsImage }
  //]
  render() {
    // return <TimelineEntry />;
    return (
      <div>
        <MiniButton />
        <div className="divider"></div>
        <MiniButton />
      </div>
    );
  }
}

export default Timeline;
