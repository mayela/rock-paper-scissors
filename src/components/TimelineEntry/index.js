import Image from "./../Image/index";
import React from "react";
import ScissorsImage from "../../images/scissors.png";

export default function TimelineEntry(props) {
  return (
    <div className="entry">
      <Image option={false} image={ScissorsImage} altText={props.altText} />
      <div className="divider">
        <span className="ruler"></span>
      </div>
      <Image option={false} image={ScissorsImage} altText={props.altText} />
    </div>
  );
}
