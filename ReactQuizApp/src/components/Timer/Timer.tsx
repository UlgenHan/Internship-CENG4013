import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";

interface QuizContextType {
  dispatch: React.Dispatch<{ type: "tick" }>; // Update this type based on your actual action types
  secondsRemaining: number;
}

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz() as QuizContextType; // Type assertion for context

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
