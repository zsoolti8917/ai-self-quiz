import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import QuizForm from '../QuizForm.jsx';
import FollowUpForm from '../FollowUpForm.jsx';
import QuizResults from '../QuizResults.jsx';
import { Button } from '../ui/button.jsx';
import HeroSection from '../HeroSection.jsx';
import Author from '../Author.jsx';
import FAQSection from '../FAQSection.jsx';
import AddQuestionDialog from '../AddQuestionDialog.jsx';
function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showQuestionsTable, setShowQuestionsTable] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Initialize forms
  const addQuestionForm = useForm({
    defaultValues: {
      text: '',
      correctAnswer: '',
    },
  });

  const answerForm = useForm({
    defaultValues: {
      userAnswer: '',
    },
  });

  const followUpForm = useForm({
    defaultValues: {
      userInput: '',
    },
  });

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/questions');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions()
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred while fetching questions.');
        setLoading(false);
      });
  }, []);

  const handleToggleQuestions = () => {
    if (!showQuestionsTable) {
      fetchQuestions();
    }
    setShowQuestionsTable(!showQuestionsTable);
  };
  const handleAddQuestion = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        setQuestions([...questions, responseData]);
        addQuestionForm.reset();
        setFeedback('New question added successfully!');
      } else {
        setFeedback('An error occurred while adding the new question.');
      }
    } catch (error) {
      console.error('Error adding new question:', error);
      setFeedback('An error occurred while adding the new question.');
    }
  };
  const handleStartQuiz = () => {
    setIsQuizStarted(true); // Start the quiz
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setQuestionCounter((prev) => prev + 1);
      setIsSubmitted(false); // Reset the submission status for the next question
      setFeedback('');
      setConversationHistory([]); // Clear the conversation history for the next question
    } else {
      setQuizFinished(true); // Mark the quiz as finished when no more questions
    }
  };

  const handleSubmit = async (data) => {
    const { userAnswer } = data;
  
    if (questions.length === 0) {
      setFeedback('No questions available.');
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    setIsLoading(true); // Start loading
  
    try {
      const response = await fetch('http://localhost:5000/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: currentQuestion._id,
          userAnswer,
        }),
      });
  
      const responseData = await response.json();
      if (response.ok) {
        setFeedback(responseData.feedback);
        setIsSubmitted(true);
  
        // Track correct answers
        if (responseData.feedback.includes('+1')) {
          setCorrectAnswersCount((prev) => prev + 1);
        }
        if (responseData.feedback.includes('+0.5')) {
          setCorrectAnswersCount((prev) => prev + 0.5);
        }
  
        // Add the current question, user's answer, and AI's feedback to the conversation history
        setConversationHistory((prev) => [
          ...prev,
          { role: 'system', content: `Question: ${currentQuestion.text}` },
          { role: 'user', content: `User's Answer: ${userAnswer}` },
          { role: 'assistant', content: responseData.feedback },
        ]);
      } else {
        setFeedback(`Error: ${responseData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setFeedback('An error occurred while submitting your answer.');
    }
  
    setIsLoading(false); // Stop loading
    answerForm.reset();
  };
  

  // Show the finish button after submitting the last question
  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  // Handle follow-up conversation
  const handleConversationSubmit = async (data) => {
    const { userInput } = data;
    if (!userInput) return;
  
    setIsLoading(true); // Start loading
  
    try {
      const response = await fetch('http://localhost:5000/api/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationHistory: [...conversationHistory, { role: 'user', content: userInput }],
        }),
      });
  
      const responseData = await response.json();
      if (response.ok) {
        // Update conversation history with the new user input and the AI's response
        setConversationHistory((prev) => [
          ...prev,
          { role: 'user', content: userInput },
          { role: 'assistant', content: responseData.reply },
        ]);
        followUpForm.reset(); // Clear the input field
      } else {
        console.error('Error:', responseData.error);
      }
    } catch (error) {
      console.error('Error handling conversation:', error);
    }
  
    setIsLoading(false); // Stop loading
  };
  

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setQuestionCounter(0);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
    setIsQuizStarted(false); // Reset quiz start
    setIsSubmitted(false);
    setFeedback('');
    setConversationHistory([]);
  };

  return (
    <div>
      <HeroSection maxNumber={questions.length} currentNumber={questionCounter} />

     

      {/* Introduction Section */}
      {!isQuizStarted && !quizFinished && (
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz!</h1>
          <p className="text-lg mb-8">Test your knowledge by answering the questions. Click the button below to start the quiz!</p>
          <Button onClick={handleStartQuiz} className="px-6 py-3 text-lg">
            Start Quiz
          </Button>
        </div>
      )}

      {/* Show Quiz when started */}
      {isQuizStarted && !quizFinished && (
        <QuizForm
  question={{ text: questions[currentQuestionIndex].text, number: currentQuestionIndex + 1 }}
  answerForm={answerForm}
  handleSubmit={handleSubmit}
  isSubmitted={isSubmitted}
  feedback={feedback}
  handleNextQuestion={handleNextQuestion}
  handleFinishQuiz={handleFinishQuiz}
  isLastQuestion={currentQuestionIndex === questions.length - 1}
  isLoading={isLoading} // Pass the loading state to the QuizForm component
/>

      )}

      {quizFinished && (
        <QuizResults correctAnswersCount={correctAnswersCount} totalQuestions={questions.length} handleRestart={handleRestart} />
      )}

      {/* Conditionally render the follow-up form only if quiz is not finished */}
      {!quizFinished && isSubmitted && isQuizStarted && (
        <FollowUpForm
          followUpForm={followUpForm}
          handleConversationSubmit={handleConversationSubmit}
          conversationHistory={conversationHistory}
        />
      )}

       {/* "See Questions Table" Button */}
       <div className="text-center my-4">
        <Button onClick={handleToggleQuestions}>
          {showQuestionsTable ? 'Hide Questions Table' : 'See Questions Table'}
        </Button>
      </div>

      {/* Show Questions Table */}
      {showQuestionsTable && (
        
        <div className="my-4">
                  <div className="text-center my-4">
        <AddQuestionDialog addQuestionForm={addQuestionForm} handleAddQuestion={handleAddQuestion} />
      </div>
          {/* Render your questions table component here */}
          <table className="table-auto w-full">
            <thead>
              <tr>
              <th className="px-4 py-2">Question ID</th>
                <th className="px-4 py-2">Question</th>
                <th className="px-4 py-2">Answer</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question._id}>
                   <td className="border px-4 py-2">{question._id}</td>
                  <td className="border px-4 py-2">{question.text}</td>
                  <td className="border px-4 py-2">{question.correctAnswer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <FAQSection />
      <Author />
    </div>
  );
}

export default HomePage;
