import React from "react";
import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
export default function Quiz() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl">Pick three of your favorite Star Wars Flims</h1>
      <h4 className="text-sm sm:text-base">Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />

    </>
  );
}
