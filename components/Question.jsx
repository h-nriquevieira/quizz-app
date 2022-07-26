import he from 'he'
import React from 'react'
import {nanoid} from 'nanoid'
import './Question.css'

export default function Question(props) {
    
    let answers = [...props.question.incorrect, props.question.correct]
    answers = answers.map(answer => he.decode(answer))

    React.useEffect(() => {
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
    }, [])
    
    const answerElements = answers.map(answer => {
        return (
            <button 
                onClick={() => props.choseAnswer(props.question.id, answer)} 
                key={nanoid()}
                className={props.question.chosen === answer ? 'chosen btn--answer' : 'btn--answer'}
            >
                {answer}
            </button>
        )
    })

    return (
        <div className="question">
            <h2>{he.decode(props.question.question)}</h2>
            <div className="answers-container">{answerElements}</div>
        </div>
        
    )
}