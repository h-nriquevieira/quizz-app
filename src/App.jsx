import { useState, useEffect } from 'react'
import Welcome from '../components/Welcome'
import Trivia from '../components/Trivia'
import {nanoid} from 'nanoid'
import he from 'he'


function App() {
  const [gameData, setGameData] = useState({
    questions: [],
    hasStarted: false,
    allChosen: false,
    sent: false
  })

  function startGame() {
    setGameData({
      questions: [],
      hasStarted: false,
      allChosen: false,
      sent: false
    })
    console.log('here')
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(data => data.json())
      .then(res => simplifyData(res.results))
      .then(res => setGameData(prevData => ({...prevData, 
                                              hasStarted: true, 
                                              questions: res, 
                                              allChosen:false,
                                              sent: false
                                            })))
      
  }

  function simplifyData(data) {
    const newData = data.map(item => ({question: he.decode(item.question), 
      incorrect: item.incorrect_answers.map(ans => he.decode(ans)), 
      correct: he.decode(item.correct_answer), 
      id: nanoid(),
      chosen: ''}))
    return newData
  }

  function choseAnswer(id, answer) {
    setGameData(prevData => ({
      ...prevData,
      questions: prevData.questions.map(question => question.id === id ? {...question, chosen: answer} : question)
    }))
  }

  function setAllChosen() {
    setGameData(prevData => ({...prevData, allChosen: true}))
  }

  function sendAnswers() {
    const rightAnswers = gameData.questions.filter(question => question.chosen === question.correct)
    setGameData(prevData => ({...prevData, sent: true}))
  }

  return (
    <main>
      {!gameData.hasStarted && <Welcome start={startGame} />}
      {gameData.hasStarted && <Trivia 
                                allChosen={gameData.allChosen} 
                                questions={gameData.questions} 
                                choseAnswer={choseAnswer}
                                setAllChosen={setAllChosen} 
                                sendAnswers={sendAnswers}
                                allSent={gameData.sent}
                                startAgain={startGame}
                                />}
    </main>
  )
}

export default App
