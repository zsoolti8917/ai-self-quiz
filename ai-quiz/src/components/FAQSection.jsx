import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion.jsx"
  
  export default function FAQSection() {
    const faqs = [
      {
        question: "What is the AI Quiz App?",
        answer: "The AI Quiz App is a learning platform where users can take quizzes on various topics. The system evaluates your answers in real-time using AI, providing instant feedback to help you learn and improve."
      },
      {
        question: "How are my answers evaluated?",
        answer: "When you submit an answer, the app uses AI to compare your response to the correct answer. It provides detailed feedback on how accurate your answer is and helps you understand where improvements can be made."
      },
      {
        question: "Can I add my own questions?",
        answer: "Yes! You can contribute to the quiz pool by adding your own questions. This feature allows you to customize the learning experience or challenge others with unique quiz content."
      },
      {
        question: "Is my progress saved?",
        answer: "Currently, progress is saved within your session. In future updates, we plan to introduce user accounts, which will allow you to log in, track your progress over time, and continue quizzes where you left off."
      },
      {
        question: "How does the app personalize my quiz experience?",
        answer: "The AI adapts to your performance. As you progress, the app adjusts the difficulty of the questions based on how well you're doing. It aims to challenge you while helping you strengthen areas where you're less confident."
      },
      {
        question: "Will I be able to track my performance over time?",
        answer: "Yes, future updates will include detailed analytics that will allow you to track your quiz performance over time, showing improvements, weaknesses, and progress in various topics."
      }
    ]
  
    return (
      <div className="max-w-2xl mx-auto mt-36 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-medium text-indigo-900 hover:text-indigo-700 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-indigo-800">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
