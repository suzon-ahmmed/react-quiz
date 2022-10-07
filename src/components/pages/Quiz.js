import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const location =  useLocation();
  const videoTitle = location.state.videoTitle;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuestions(id);

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
      case "answer":
        const questions = _.cloneDeep(state);
        questions[action.questionId].options[action.optionIndex].checked =
          action.value;
        return questions;
      default:
        return state;
    }
  };

  const [qna, dispatch] = useReducer(reducer, initialState);

  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handelAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
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

  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`,{
      state: {
        qna,
      }
    });
  }

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // console.log('try to find error');
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>Error...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <div className="sm:mx-0 mx-2">
          <h1 className="text-2xl sm:text-3xl dark:text-gray-200">{qna[currentQuestion].title}</h1>
          <h4 className="text-sm sm:text-base dark:text-gray-400">
            Question can have multiple answers
          </h4>
          <Answers
            input
            options={qna[currentQuestion].options}
            handelChange={handelAnswerChange}
          />
        </div>
      )}
      <ProgressBar
        next={NextQuestion}
        prev={PrevQuestion}
        progress={percentage}
        submit={submit}       
      />
      <MiniPlayer  id={id} videoTitle={videoTitle}/>
    </>
  );
}
