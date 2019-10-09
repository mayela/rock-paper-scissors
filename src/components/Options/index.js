import Option from "../Option";
import React from "react";
import RockImage from "../../images/rock.png";
import PaperImage from "../../images/paper.png";
import ScissorsImage from "../../images/scissors.png";
import "./index.css";

export default function Options(props) {
  return (
    <div className="options">
      <Option
        type="rock"
        image={RockImage}
        altText="Rock"
        onclick={props.onClick}
      />
      <Option
        type="paper"
        image={PaperImage}
        altText="Paper"
        onClick={props.onClick}
      />
      <Option
        type="scissors"
        image={ScissorsImage}
        altText="Scissors"
        onClick={props.onClick}
      />
    </div>
  );
}
