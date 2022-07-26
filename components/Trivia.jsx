import Question from "./Question";

export default function Trivia(props) {
    return (
        <div className="trivia">
            <h1>Trivia</h1>
            <Question question={props.questions[0]}/>
        </div>
    )
}