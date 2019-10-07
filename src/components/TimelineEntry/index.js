import ImageEntry from "./../ImageEntry/index";
import React from "react";

export default function TimelineEntry(props) {
  return (
    <div className="entry">
      <ImageEntry image={props.image} altText={props.altText} />
      <div className="divider">
        <span className="ruler"></span>
      </div>
      <ImageEntry image={props.image} altText={props.altText} />
    </div>
  );
}
