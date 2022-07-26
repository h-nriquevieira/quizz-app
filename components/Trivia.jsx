import Question from "./Question";
import {useEffect} from 'react'

export default function Trivia(props) {

    useEffect(() => {
        const chosen = props.questions.filter(question => question.chosen)
        if (chosen.length === props.questions.length) {
          props.setAllChosen()
        }
      }, [props.questions])

    return (
        <div className="trivia">
            <h1>Trivia</h1>
            {props.questions.map(q => <Question key={q.id} question={q} choseAnswer={props.choseAnswer}/>)}
            {props.allSent && <p>You got {
                props.questions.filter(question => question.chosen === question.correct).length
            }/5 questions right</p>}
            {props.allChosen && <button
                                    onClick={props.allSent ? props.startAgain : props.sendAnswers}
                                >{props.allSent ? 'New game' : 'Submit answers'}</button>}
        </div>
    )
}