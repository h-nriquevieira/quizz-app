import { useState } from 'react'
import Welcome from '../components/Welcome'
import Trivia from '../components/Trivia'


function App() {

  const [questions, setQuestions] = useState()
  const [gameStarted, setGameStarted] = useState(false)

  function startGame() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(data => data.json())
      .then(res => setQuestions(res.results))
      .then(() => setGameStarted(true))
  }


  return (
    <main>
      {!gameStarted && <Welcome start={startGame} />}
      {gameStarted && <Trivia questions={questions} />}
    </main>
  )
}

export default App
