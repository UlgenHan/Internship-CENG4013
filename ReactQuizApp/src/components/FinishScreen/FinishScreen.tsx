import React from "react";
import { useQuiz } from "../../contexts/QuizContext";
import { QuizAction } from "../../contexts/types/types";

const FinishScreen: React.FC = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji: string;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "🙃";
  else if (percentage >= 0 && percentage < 50) emoji = "🤨";
  else emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" } as QuizAction)}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
