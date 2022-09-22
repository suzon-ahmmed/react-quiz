import React, { Fragment } from "react";
import CheckBox from "./CheckBox";

export default function Answers({ options = [], handelChange, input }) {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Fragment key={index}>
          {
            (input ? (
              <CheckBox
                className="answer"
                text={option.title}
                value={index}
                key={index}
                checked={option.checked}
                onChange={(e) => {
                  handelChange(e, index);
                }}
              />
            ) : (
              <CheckBox
                className={`answer ${
                  option.correct ? "correct" : option.checked ? "wrong" : null
                }`}
                text={option.title}
                value={index}
                key={index}
                defaultChecked={option.checked}
              />
            ))
          }
        </Fragment>
      ))}
    </div>
  );
}
