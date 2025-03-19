'use client'
import { TimerProps } from "@/types";
import React, { useEffect, useState } from "react";

const Timer:React.FC<TimerProps> = ({seconds, onTimeUp}) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    setTimeLeft(seconds);
    
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
}, [seconds, onTimeUp]);
 const percentage = (timeLeft / seconds) * 100;
  
 let timerColor = '#4caf50';
 if (percentage < 25) {
   timerColor = '#f44336'; 
 } else if (percentage < 50) {
   timerColor = '#ff9800';
 }

  return (
    <div className='timer-container'>
    <div 
      className='timer-circle'
      style={{ borderColor: timerColor }}
    >
      <span className='timer-text'>{timeLeft}</span>
      <span className='timer-unit'>sec</span>
    </div>
    <div className='timer-progress'>
      <div 
        className='timer-progress-bar' 
        style={{ 
          width: `${percentage}%`,
          backgroundColor: timerColor
        }} 
      />
    </div>
  </div>

  );
};

export default Timer;
