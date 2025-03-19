'use client'
import React, { useEffect, useState } from 'react'
import { InterviewResult } from '@/types';
import { useRouter } from 'next/navigation';

const Result = () => {
    const [result, setResult] = useState<InterviewResult | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      const savedResult = localStorage.getItem('interviewResult');
      if (savedResult) {
        setResult(JSON.parse(savedResult));
      }
    }, []);
  
    const handleReturnHome = () => {
      localStorage.removeItem('interviewResult');
      router.push('/');
    };
  
    if (!result) {
      return <div>No result found. Please take an interview first.</div>;
    }
  
    const percentage = Math.round((result.score / result.totalQuestions) * 100);
  return (
    <div className='container'>
    <div className='result-card'>
      <h1 className='title'>Interview Complete!</h1>
      <h2 className='subtitle'>
        You&apos;ve completed all questions for {result.profession}
      </h2>
      
      <div className='scoreContainer'>
        <div className='score-circle'>
          <span className='score'>{result.score}</span>
          <span className='total-score'>/{result.totalQuestions}</span>
        </div>
        <div className='percentage'>{percentage}%</div>
      </div>
      
      <div className='feedback'>
        {percentage >= 70 ? (
          <p className='success-message'>Great job! You&apos;ve passed the interview.</p>
        ) : (
          <p className='fail-message'>You might need more practice. Try again!</p>
        )}
      </div>
      
      <button 
        className='return-button'
        onClick={handleReturnHome}
      >
        Return to Professions
      </button>
    </div>
  </div>
  )
}

export default Result