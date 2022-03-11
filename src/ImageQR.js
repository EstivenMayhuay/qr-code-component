import React from "react";
// import imageQrCode from "./images/image-qr-code.png";
import imageQrCode from "./images/qr-code-github.png";

const ImageQR = () => {
  return (
    <p className="cardQR__img">
      <img src={imageQrCode} alt="qr code" />;
    </p>
  );
};

export default ImageQR;
