import Image from "./../Image/index";
import React from "react";

export default function TimelineEntry(props) {
  return (
    <div className="entry">
      <Image image={props.image} altText={props.altText} />
      <div className="divider">
        <span className="ruler"></span>
      </div>
      <Image image={props.image} altText={props.altText} />
    </div>
  );
}
