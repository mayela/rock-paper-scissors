import React from "react";
import "./index.css";
import Image from "./../Image/index";

export default function Option(props) {
  return (
    <button className={`button ${props.type}`} onClick={() => alert("click")}>
      <Image
        option={props.option}
        image={props.image}
        altText={props.altText}
      />
    </button>
  );
}
