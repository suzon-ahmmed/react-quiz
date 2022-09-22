import React from "react";
import SuccessImage from '../assets/images/success.png';

export default function Summary({getScore, noq}) {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />{getScore} out of {noq * 5}
        </p>
      </div>

      <div className="badge">
        <img src={SuccessImage} alt="Success" />
      </div>
    </div>
  );
}
