import React from "react";
import CheckBox from "./CheckBox";

export default function Answers({ options = [], handelChange }) {
  return (
    <div className="answers">
      {options.map((option, index) => {
       
        return(
          <CheckBox
          className="answer"
          text={option.title}
          key={index}
          checked={option.checked}
          onChange={(e) => {
            handelChange(e, index);

          }}
        />
        );
      })}
    </div>
  );
}
