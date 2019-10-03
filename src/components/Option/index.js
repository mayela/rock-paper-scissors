import React from "react";
import "./index.css";

export default function Option(props) {
  return <img className="image-button" src={props.image} alt={props.altText} />;
}
