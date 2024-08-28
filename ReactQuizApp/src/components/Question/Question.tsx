import { useQuiz } from "../../contexts/QuizContext";
import { Question as QuestionType } from "../../contexts/types/types";
import Options from "../Option/Options";

function Question(): JSX.Element {
  const { questions, index } = useQuiz();
  const question: QuestionType | undefined = questions[index];

  if (!question) {
    return <div>Loading...</div>; // Fallback in case the question is not found
  }

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
