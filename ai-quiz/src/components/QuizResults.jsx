import React from 'react';
import { Button } from './ui/button';

function QuizResults({ correctAnswersCount, totalQuestions, handleRestart }) {
  return (
    <div className="text-center text-xl font-semibold mt-8">
      <p>You have completed the quiz!</p>
      <p>You answered {correctAnswersCount} out of {totalQuestions} questions correctly.</p>
      <Button onClick={handleRestart} className="mt-4">Restart Quiz</Button>
    </div>
  );
}

export default QuizResults;
