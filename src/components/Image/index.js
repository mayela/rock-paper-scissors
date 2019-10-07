import React from "react";

export default function Image(props) {
  return (
    <img
      className={props.option ? "option" : "timeline-entry"}
      src={props.image}
      alt={props.altText}
    />
  );
}
