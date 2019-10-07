import React from "react";
import TimelineEntry from "../TimelineEntry";

class Timeline extends React.Component {
  // Pass an array formated:
  // [
  // { "type": "rock", "image": RockImage },
  // { "type": "paper", "image": PaperImage },
  // { "type": "scissors", "image": ScissorsImage }
  //]
  render() {
    return <TimelineEntry />;
  }
}

export default Timeline;
