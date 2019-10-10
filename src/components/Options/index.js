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
        onClick={() => props.onClick("R")}
      />
      <Option
        type="paper"
        image={PaperImage}
        altText="Paper"
        onClick={() => props.onClick("P")}
      />
      <Option
        type="scissors"
        image={ScissorsImage}
        altText="Scissors"
        onClick={() => props.onClick("S")}
      />
    </div>
  );
}
