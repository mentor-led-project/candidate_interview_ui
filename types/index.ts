export interface Profession {
    id: string;
    name: string;
    description: string;
  }
  
  export interface Option {
    id: string;
    text: string;
    isCorrect: boolean;
  }
  
  export interface QuestionType {
    id: string;
    text: string;
    options: Option[];
    profession: string;
    topics: string[];
  }
  
  export interface QuestionProps {
    question: QuestionType;
    onAnswer: (option: Option) => void;
    answered: boolean;
  }
  
  export interface TimerProps {
    seconds: number;
    onTimeUp: () => void;
  }
  
  export interface AnsweredQuestion {
    questionId: string;
    isCorrect: boolean;
  }
  
  export interface InterviewResult {
    profession: string;
    score: number;
    totalQuestions: number;
    answeredQuestions: AnsweredQuestion[];
  }