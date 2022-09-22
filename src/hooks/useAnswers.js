import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  const clearEffect = useRef(false);

  useEffect(() => {
    if (clearEffect.current === false) {
      async function fetchAnswers() {
        // database related works
        const db = getDatabase();
        const answersRef = ref(db, "answers/" + videoID + "/questions");
        const answersQuery = query(answersRef, orderByKey());
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(answersQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setAnswers((prevAnswers) => {
              return [...prevAnswers, ...Object.values(snapshot.val())];
            });
          }
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }

      fetchAnswers();
    }
    return () => {
      clearEffect.current = true;
    };
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
