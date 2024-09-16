import { Github, Linkedin, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-foreground min-w-24">Ai Quiz</h1>
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex flex-col sm:flex-row items-center sm:space-x-6 w-full justify-center mb-4 sm:mb-0">
          <Link to="/" className="px-4 py-2 text-lg text-muted-foreground hover:text-foreground transition-colors">
            Quiz
          </Link>
          <Link to="/about" className="px-4 py-2 text-lg text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        {/* Social Icons */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/zsoolti8917" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zsoltvarju/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://zsoltvarju.com/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-6 h-6" />
                <span className="sr-only">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="https://zsoltvarju.dev/" className="text-muted-foreground hover:text-foreground transition-colors">
                <BookOpen className="w-6 h-6" />
                <span className="sr-only">Blog</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
