import { useState } from 'react';
import { questions } from './data/questions';
import TimerProgress from './components/TimerProgress/TimerProgress';
import QuizCore from './components/QuizCore/QuizCore';
import QuizResults from './components/QuizResults/QuizResults';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  const handleNextQuestion = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizOver(true);
    }
  };

  const handleTimeUp = (finalTime) => {
    setTimeSpent(finalTime);
    setIsQuizOver(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizOver(false);
    setTimeSpent(0);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Skillwill Fast-Track Quiz</h1>
      </header>

      {!isQuizOver ? (
        <div className="quiz-window">
          {/* სტუდენტი 1 */}
          <TimerProgress
            current={currentQuestionIndex + 1}
            total={questions.length}
            onTimeUp={handleTimeUp}
            isQuizOver={isQuizOver}
          />

          {/* სტუდენტი 2 */}
          <QuizCore
            key={currentQuestionIndex}
            currentQuestion={questions[currentQuestionIndex]}
            onNext={handleNextQuestion}
          />
        </div>
      ) : (
        /* სტუდენტი 3 */
        <QuizResults
          questions={questions}
          userAnswers={userAnswers}
          timeSpent={timeSpent}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;