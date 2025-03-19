'use client'
import { QuestionProps, Option } from "@/types"; 
import React, { useState } from "react";

const Question: React.FC<QuestionProps> = ({ question, onAnswer, answered }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleOptionSelect = (option: Option) => {
    if (answered) return;

    setSelected(option.id);
    onAnswer(option);
  };

  const getOptionClass = (option: Option) => { 
    
    if(!answered) {
      return option.id === '' ? 'selected-option' : 'option';
    }

    if (option.isCorrect) { 
      return 'correct-option'
    }

    if (option.id === selected && !option.isCorrect) {
      return 'incorrect-option';
    }

    return 'option';
  };

  return (
  <div className='question-container'>
    <h3 className='question-text'>{question.text}</h3>
    <div className='options-container'>
      {question.options.map((option) => (
        <button
          key={option.id}
          className={getOptionClass(option)}
          onClick={() => handleOptionSelect(option)}
          disabled={answered}
        >
          {option.text}
        </button>
      ))}
    </div>
  </div>
  );
};

export default Question;