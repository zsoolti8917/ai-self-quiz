import { Progress } from "./ui/progress.jsx";
import { Button } from "./ui/button.jsx";
import { Brain } from "lucide-react";

export default function HeroSection({ maxNumber, currentNumber }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Welcome to AI Quiz Master
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
              Challenge your knowledge with our experimental AI-powered quiz app
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="w-full">
            <div className="flex items-center space-x-2 mx-auto w-fit">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium ">Intelligence Meter</span>
            </div>
            </div>
            
            <Progress value={(currentNumber / maxNumber) * 100} className="w-full" />
            <p>
              Question {currentNumber + 1} of {maxNumber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
