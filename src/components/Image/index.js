import React from "react";

export default function Image(props) {
  return (
    <img
      width="100%"
      className={props.option ? "option" : "timeline-entry"}
      src={props.image}
      alt={props.altText}
    />
  );
}
