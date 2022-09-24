import React from "react";
import Fail from "../assets/images/fail.png";
import First from "../assets/images/first.png";
import Second from "../assets/images/second-prize.png";
import Third from "../assets/images/third.png";

export default function Summary({ getScore, noq }) {
  function getAward() {
    if ((getScore / (noq * 5)) * 100 < 50) {
      return Fail;
    } 
    else if ((getScore / (noq * 5)) * 100 >= 80) {
      return First;
    } 
    else if ((getScore / (noq * 5)) * 100 >= 70) {
      return Second;
    } 
    else if ((getScore / (noq * 5)) * 100 >= 50) {
      return Third;
    }

  }
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />
          {getScore} out of {noq * 5}
        </p>
      </div>

      <div className="badge">
        <img src={getAward()} alt="Success" />
      </div>
    </div>
  );
}
