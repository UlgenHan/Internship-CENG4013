import { useQuiz } from "../../contexts/QuizContext";
import { QuizContextType, QuizAction } from "../../contexts/types/types";

function NextButton(): JSX.Element | null {
  const { dispatch, answer, index, numQuestions } =
    useQuiz() as QuizContextType;

  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" } as QuizAction)}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" } as QuizAction)}
      >
        Finish
      </button>
    );
  }

  return null; // Added to ensure all code paths return a value
}

export default NextButton;
