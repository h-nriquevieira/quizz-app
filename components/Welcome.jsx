export default function Welcome(props) {
    return (
    <div className="welcome-page">
        <h1>Quizzical</h1>
        <p>Press start to play</p>
        <button onClick={props.start}>Start quiz</button>
    </div>
    )
}