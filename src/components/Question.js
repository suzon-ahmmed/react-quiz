import React from "react";
import Answers from "./Answers";

export default function Question({answers = []}) {
  return answers.map((answer, index)=>(
    <div className="question" key={index}>
      <div className="qtitle">
        <span className="material-icons-outlined text-green-500"> help_outline </span>
        {answer.title}
      </div>
      <Answers options={answer.options} input={false}/>
    </div>
  ));
}
 