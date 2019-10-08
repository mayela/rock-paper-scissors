import React from "react";
import Image from "../Image";

import "./styles.css";

import MiniRock from "../../images/mini-r.png";
import MiniPaper from "../../images/mini-p.png";
import MiniScissors from "../../images/mini-s.png";

const mapImage = {
  r: MiniRock,
  p: MiniPaper,
  s: MiniScissors
};

const MiniButton = props => {
  const { type = "r" } = props;
  return (
    <div className="mini-button">
      <Image image={mapImage[type]} />
    </div>
  );
};

export default MiniButton;
