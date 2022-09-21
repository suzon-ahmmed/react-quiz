// import { getDatabase, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import {  useParams } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  const { id } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuestions(id);
  // const history =  Navigate();

  const initialState = null;

  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "questions":
        action.value.forEach((question) => {
          question.options.forEach((option) => {
            option.checked = false;
          });
        });
        return action.value;
      case "aswers":
        const questions = _.cloneDeep(state);
        questions[action.questionId].options[action.optionIndex].checked =
          action.value;
        return questions;
      default:
        return state;
    }
  };

  const [qna, dispatch] = useReducer(reducer, initialState);
  // console.log(qna);

  // const {currentUser} = useAuth();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handelAnswerChange = (e, index) => {
    dispatch({
      type: "answers",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  function NextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  function PrevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // async function submit() {
  //  const {uid} = currentUser;

  //  const db = getDatabase();
  //  const resultRef = (db, `result/${uid}`);

  //  await set(resultRef, {
  //   [uid] : qna,
  //  });
  //  history.push({
  //   pathname : `result/${id}`,
  //   state: {
  //     qna,
  //   }
  //  })
  // }
  // console.log('try to find error');
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>Error...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1 className="text-2xl sm:text-3xl">{qna[currentQuestion].title}</h1>
          <h4 className="text-sm sm:text-base">
            Question can have multiple answers
          </h4>
          <Answers
            options={qna[currentQuestion].options}
            handelChange={handelAnswerChange}
          />
        </>
      )}
      <ProgressBar
        next={NextQuestion}
        prev={PrevQuestion}
        progress={percentage}
        // submit={submit}
      />
      <MiniPlayer />
    </>
  );
}
