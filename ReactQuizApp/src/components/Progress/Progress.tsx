import { useQuiz } from "../../contexts/QuizContext";
import { QuizContextType } from "../../contexts/types/types";

function Progress(): JSX.Element {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useQuiz() as QuizContextType;

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
