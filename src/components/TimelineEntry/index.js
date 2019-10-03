import React from "react";
import DuckImg from "../../images/duck-pixel.png";

export default function TimelineEntry() {
  return (
    <div>
      <img src={DuckImg} alt="Duck" width="50" height="50" />
      <img src={DuckImg} alt="Duck" width="50" height="50" />
    </div>
  );
}
