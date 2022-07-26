import './Welcome.css'

export default function Welcome(props) {
    return (
    <div className="welcome-page">
        <h1>Quizzical</h1>
        <button className="start-game" onClick={props.start}>Start quiz</button>
    </div>
    )
}