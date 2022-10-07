import React from "react";
import Question from './Question';

export default function Analysis({answers}) {
  return (
    <div className="analysis">
      <h1 className="text-2xl sm:text-3xl font-semibold dark:text-gray-200">Question Analysis</h1>
      {/* <h4>You answerd 5 out of 10 questions correctly</h4> */}

      <Question answers={answers}/>
    </div>
  );
}
