import React from "react";
import Button from "./Button";
import {Link} from 'react-router-dom';

export default function ProgressBar() {
  return (
    <div className="progressBar">
      <div className="backButton">
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip">24% Cimplete!</div>
        <div className="rangeBody">
          <div className="progress w-1/5" ></div>
        </div>
      </div>
      <Link to="/result" className="mr-2">
        <Button className='button next'>
            <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
}
