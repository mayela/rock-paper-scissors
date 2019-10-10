import React from "react";
import "./styles.css";

import MiniButton from "../MiniButton";

export default function Timeline(props) {
  return (
    <div>
      {props.history.map(function(historyEntry) {
        return (
          <div className="timeline-entry">
            <MiniButton type={historyEntry["me"]} />
            <div className="line"></div>
            <MiniButton type={historyEntry["machine"]} />
          </div>
        );
      })}
    </div>
  );
}
