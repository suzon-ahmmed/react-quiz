import React from "react";
import SuccessImage from '../assets/images/success.png';

export default function Summary() {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className="badge">
        <img src={SuccessImage} alt="Success" />
      </div>
    </div>
  );
}
