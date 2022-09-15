import React from "react";
import Question from './Question';

export default function Analysis() {
  return (
    <div className="analysis">
      <h1 className="text-2xl sm:text-3xl font-semibold">Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>

      <Question />
    </div>
  );
}
