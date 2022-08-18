import './App.css';
import React from "react"
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';

function App() {

  const [startQuiz, setStartQuiz] = React.useState(false)

  function toggleQuiz(){
    setStartQuiz(true)
  }

  return (
    <div className="App">
      {startQuiz ? <QuizPage /> : <StartPage handleClick={toggleQuiz} />}
    </div>
  );
}

export default App;
