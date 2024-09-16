import { Github, Linkedin, Globe, BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-3">
            AQ
          </div>
          <span className="text-lg font-semibold">Zsolt Varjú</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with React. © {new Date().getFullYear()} Zsolt Varjú. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/zsoolti8917" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.linkedin.com/in/zsoltvarju/" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://zsoltvarju.com/">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Portfolio</span>
          </a>
          <a href="https://zsoltvarju.dev/">
            <BookOpen className="h-5 w-5" />
            <span className="sr-only">Blog</span>
          </a>
        </div>
      </div>
    </footer>
  )
}