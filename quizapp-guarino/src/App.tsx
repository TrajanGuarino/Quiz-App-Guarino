import { useState } from 'react';
import './App.css';
import { questions } from './questions';
import QuestionPageComponent from './components/QuestionPageComponent';

type Screen = 'welcome' | 'quiz' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [score, setScore] = useState(0);

  function handleFinish(finalScore: number) {
    setScore(finalScore);
    setScreen('result');
  }

  if (screen === 'welcome') {
    return (
      <div className="box center">
        <h1>Welcome Quiz App</h1>
        <button onClick={() => setScreen('quiz')}>Start Quiz</button>
      </div>
    );
  }

  if (screen === 'quiz') {
    return <QuestionPageComponent onFinish={handleFinish} />;
  }

  return (
    <div className="box center">
      <h1>Your Score</h1>
      <h2>{score}/{questions.length}</h2>
      <button onClick={() => setScreen('quiz')}>Start Quiz</button>
    </div>
  );
}

export default App;