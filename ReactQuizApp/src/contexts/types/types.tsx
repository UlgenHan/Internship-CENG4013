// src/contexts/types.ts
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface QuizState {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
}

export type QuizAction =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };

export interface QuizContextType {
  questions: Question[];
  status: QuizState["status"];
  index: number;
  answer: string | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
  numQuestions: number;
  maxPossiblePoints: number;
  dispatch: React.Dispatch<QuizAction>;
}
