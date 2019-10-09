import React from "react";
import "./index.css";
import Image from "./../Image";
export default function Option(props) {
  return (
    <button className={`button ${props.type}`} onClick={props.onClick}>
      <Image option={true} image={props.image} altText={props.altText} />
    </button>
  );
}
