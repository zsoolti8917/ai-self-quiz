import React from 'react';

function AboutPage() {
  return (
    <div>
      {/* Full-width image */}
      <div className="w-full h-64 bg-cover bg-center mb-8" style={{ backgroundImage: 'url("https://via.placeholder.com/1600x400")' }}>
        <h1 className="text-white text-4xl font-bold text-center pt-24">About This Project</h1>
      </div>

      {/* About section */}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-md mb-32">
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-lg mb-6">
          This project is a comprehensive quiz application that allows users to test their knowledge across various subjects.
          The system is built using React for the frontend, Node.js and Express for the backend, and MongoDB for data persistence.
          The application evaluates user answers in real-time using the OpenAI GPT model, and provides detailed feedback based
          on their responses.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Features</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Add, update, and manage quiz questions.</li>
          <li>Evaluate user answers in real-time using OpenAI's GPT model.</li>
          <li>Track quiz progress and provide detailed feedback.</li>
          <li>Engage in follow-up conversations with AI to deepen understanding of topics.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
        <p className="text-lg">
          <strong>Frontend:</strong> React, Tailwind CSS, React Hook Form<br />
          <strong>Backend:</strong> Node.js, Express, MongoDB, OpenAI API<br />
          <strong>Styling:</strong> Tailwind CSS, shadcn UI components<br />
        </p>

        {/* Future Improvements */}
        <h3 className="text-2xl font-semibold mb-4 mt-4">Future Improvements</h3>
        <p className="text-lg mb-6">
          I have many exciting features planned for future updates that will enhance the user experience and make the platform
          more engaging and personalized. Below are some of the improvements we are working on:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>User Authentication:</strong> Users will be able to sign up and log in to their accounts. This will allow them
            to track their progress across multiple quiz sessions.
          </li>
          <li>
            <strong>Progress Tracking:</strong> Users will be able to see their progress, including the number of questions
            answered correctly, quiz scores, and a history of their previous attempts. They will also be able to continue a quiz
            from where they left off.
          </li>
          <li>
            <strong>Personalized Quizzes:</strong> Quizzes will adapt to the user’s performance over time, offering more challenging
            questions or questions based on previously missed topics to help users improve in weak areas.
          </li>
          <li>
            <strong>Leaderboard and Competitions:</strong> A global leaderboard feature where users can compare their scores with
            others and participate in friendly quiz competitions to boost engagement.
          </li>
          <li>
            <strong>Enhanced Analytics:</strong> Users will have access to detailed analytics about their performance. This will
            include statistics such as time taken per question, difficulty level, and topic breakdown to help users understand
            where they excel and where they need to improve.
          </li>
          <li>
            <strong>Quiz Categories and Difficulty Levels:</strong> Quizzes will be grouped into categories, and users will have the
            ability to select the difficulty level of the quiz (beginner, intermediate, advanced) to match their skill level.
          </li>
          <li>
            <strong>Mobile App:</strong> A dedicated mobile app will be developed to make it easier for users to take quizzes on
            the go, track their progress, and interact with the platform seamlessly.
          </li>
          <li>
            <strong>Multilingual Support:</strong> We aim to add support for multiple languages, allowing users from around the
            world to take quizzes in their preferred language.
          </li>
        </ul>

        <p className="text-lg">
          These features are designed to create a richer, more personalized experience for users, allowing them to grow their
          knowledge at their own pace while keeping the experience engaging and fun.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
