import React from "react";
import "./index.css";

export default function Option(props) {
  return (
    <button className={`button ${props.type}`} onClick={() => alert("click")}>
      <img className="image" src={props.image} alt={props.altText} />
    </button>
  );
}
