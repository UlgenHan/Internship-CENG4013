import { useQuiz } from "../../contexts/QuizContext";
import { QuizAction } from "../../contexts/types/types";

function StartScreen(): JSX.Element {
  const { numQuestions, dispatch } = useQuiz();

  const handleStart = () => {
    dispatch({ type: "start" } as QuizAction);
  };

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
