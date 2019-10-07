import React from "react";
import "./index.css";

export default function Option(props) {
  return (
    <button className="button" id={props.type} onClick={() => alert("click")}>
      <img className="image" src={props.image} alt={props.altText} />
    </button>
  );
}
