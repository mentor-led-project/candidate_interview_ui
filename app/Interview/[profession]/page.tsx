"use client"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getRandomQuestions } from "@/questions";
import { QuestionType, Option, InterviewResult } from "@/types";
import Question from "@/components/Question";
import Timer from "@/components/Timer";

export default function Interview() {
  const params = useParams();
  const router = useRouter();
  const profession = params.profession as string;
  
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState<InterviewResult>({
    profession: '',
    score: 0,
    totalQuestions: 5,
    answeredQuestions: []
  });

  useEffect(() => {
    if (!profession) return;
    
    async function loadQuestions() {
      try {
        const data = await getRandomQuestions(profession, 5);
        setQuestions(data);
        setResult(prev => ({ ...prev, profession }));
      } catch (error) {
        console.error('Error loading questions:', error);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [profession]);

  const handleAnswer = (selectedOption: Option) => {
    setAnswered(true);
    
    const isCorrect = selectedOption.isCorrect;
    setResult(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answeredQuestions: [
        ...prev.answeredQuestions,
        {
          questionId: questions[currentQuestionIndex].id,
          isCorrect
        }
      ]
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      localStorage.setItem('interviewResult', JSON.stringify(result));

      router.push('/Result');
      return;
    }
    
    setCurrentQuestionIndex(prev => prev + 1);
    setAnswered(false);
  };

  const handleTimeUp = () => {
    if (!answered) {

      setResult(prev => ({
        ...prev,
        answeredQuestions: [
          ...prev.answeredQuestions,
          {
            questionId: questions[currentQuestionIndex].id,
            isCorrect: false
          }
        ]
      }));
      setAnswered(true);
    }
  };

  if (loading) {
    return <div className='container'>Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div className='container'>No questions found for this profession.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  return (
    <div className='container'>
      <div className='interview-card'>
        <div className='header'>
          <h2>Interview Page - {profession}</h2>
          <div className='progress'>
            <span>Question {questionNumber} of {questions.length}</span>
            <Timer seconds={60} onTimeUp={handleTimeUp} />
          </div>
        </div>
        
        <Question 
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={answered}
        />
        
        <div className='actions'>
          <button 
            className='next-button'
            onClick={handleNextQuestion}
            disabled={!answered}
          >
            {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}