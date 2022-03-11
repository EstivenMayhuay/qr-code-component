import React from "react";

// components
import ImageQR from "./ImageQR";
import InfoQR from "./InfoQR";

// styles
import "./CardQR.css";

const CardQR = () => {
  return (
    <div className="cardQR">
      <ImageQR />
      <InfoQR />
    </div>
  );
};

export default CardQR;
