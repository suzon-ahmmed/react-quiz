import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState, useRef } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  const clearEffect = useRef(false);

  useEffect(() => {
    if (clearEffect.current === true) {
      async function fetchQuestion() {
        // database related works
        const db = getDatabase();
        const quizRef = ref(db, "quiz/" + videoID + "/questions");
        const quizQuery = query(quizRef, orderByKey());
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(quizQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setQuestions((prevQuestions) => {
              return [...prevQuestions, ...Object.values(snapshot.val())];
            });
          }
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }

      fetchQuestion();
    }
    return () => {
      clearEffect.current = true;
    };
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
