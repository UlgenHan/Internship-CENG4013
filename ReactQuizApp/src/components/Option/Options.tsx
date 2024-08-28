import { useQuiz } from "../../contexts/QuizContext";
import {
  QuizAction,
  Question as QuestionType,
} from "../../contexts/types/types";

interface OptionsProps {
  question: QuestionType;
}

function Options({ question }: OptionsProps): JSX.Element {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  const handleClick = (index: number) => {
    dispatch({ type: "newAnswer", payload: index } as QuizAction);
  };

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
