import React, { useState, useRef } from "react";
import Button from "./Button";
// import { Link } from "react-router-dom";

export default function ProgressBar({ next, prev, submit, progress, state}) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 62px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip"  ref={tooltipRef}>{progress}% Cimplete!</div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className="button next mr-2"
        onClick={progress === 100 ? submit : next}
       
      >
        <span className="hidden sm:block">{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
