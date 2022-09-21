import React from "react";
import Button from "./Button";
// import { Link } from "react-router-dom";

export default function ProgressBar({ next, prev, submit, progress }) {
  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip">{progress}% Cimplete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <Button className="button next" onClick={progress === 100 ? submit : next}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
