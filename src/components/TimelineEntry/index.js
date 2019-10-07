import React from "react";
import DuckImg from "../../images/duck-pixel.png";

export default function TimelineEntry() {
  return (
    <div className="entry">
      <img src={DuckImg} alt="Duck" width="50" height="50" />
      <div className="divider">
        <span className="ruler"></span>
      </div>
      <img src={DuckImg} alt="Duck" width="50" height="50" />
    </div>
  );
}
