import React from "react";
import Image from "../Image";

import "./styles.css";

import MiniRock from "../../images/mini-rock.png";
import MiniPaper from "../../images/mini-paper.png";
import MiniScissors from "../../images/mini-scissors.png";

const mapImage = {
  R: MiniRock,
  P: MiniPaper,
  S: MiniScissors,
};

const MiniButton = props => {
  const { type = "R" } = props;
  return (
    <div className="mini-button">
      <Image image={mapImage[type]} />
    </div>
  );
};

export default MiniButton;
