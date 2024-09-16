import React from 'react';
import { Button } from './ui/button';

function QuizForm({
  question,
  answerForm,
  handleSubmit,
  isSubmitted,
  feedback,
  handleNextQuestion,
  handleFinishQuiz,
  isLastQuestion,
  isLoading,
}) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Question {question.number}</h2>
      <p className="text-lg mb-4">{question.text}</p>

      {!isSubmitted && (
        <form onSubmit={answerForm.handleSubmit(handleSubmit)} className="space-y-4">
          <div>
            <label htmlFor="userAnswer" className="block text-sm font-medium">
              Your Answer
            </label>
            <input
              id="userAnswer"
              {...answerForm.register('userAnswer')}
              className="mt-1 block w-full px-4 py-2 border rounded"
              placeholder="Type your answer here"
              disabled={isLoading} // Disable the input while loading
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      )}

      {feedback && (
        <div className="mt-4">
          <p className="text-lg">{feedback}</p>
          {isSubmitted && !isLastQuestion && (
            <Button onClick={handleNextQuestion} className="mt-4">
              Next Question
            </Button>
          )}

          {isSubmitted && isLastQuestion && (
            <Button onClick={handleFinishQuiz} className="mt-4">
              Finish Quiz
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizForm;
