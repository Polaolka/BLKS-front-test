import React from "react";
import bubble from "../../assets/images/bubble.png";

const InfoBubble = ({ text }) => {
  return (
    <div>
      <img src={bubble} alt="bubble" width={"50px"} />
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default InfoBubble;
