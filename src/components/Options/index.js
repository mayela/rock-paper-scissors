import Option from "../Option";
import React from "react";
import RockImage from "../../images/rock.png";
import PaperImage from "../../images/paper.png";
import ScissorsImage from "../../images/scissors.png";

export default function Options() {
  return (
    <div>
      <Option image={RockImage} altText="Rock" />
      <Option image={PaperImage} altText="Paper" />
      <Option image={ScissorsImage} altText="Scissors" />
    </div>
  );
}
