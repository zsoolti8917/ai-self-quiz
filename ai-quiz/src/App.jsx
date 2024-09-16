import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage.jsx'; // Use relative path to pages directory
import AboutPage from './components/pages/AboutPage.jsx'; // Use relative path to pages directory

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Component */}
        <Header />
        {/* Navigation Links */}


        {/* Main Content Area */}
        <main className="container mx-auto px-4 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* The Quiz Page */}
            <Route path="/about" element={<AboutPage />} /> {/* The About Page */}
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
