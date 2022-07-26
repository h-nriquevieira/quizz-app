import he from 'he'

export default function Question(props) {
    let shuffledAnswers = props.question.incorrect_answers;
    shuffledAnswers.push(props.question.correct_answer);

    function shuffleAnswers(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const mappedAnswers = shuffledAnswers.map(answer => <p>{he.decode(answer)}</p>)
    
//     category: "Animals"
// ​​
// correct_answer: "River Horse (Greek)"
// ​​
// difficulty: "medium"
// ​​
// incorrect_answers: Array(9) [ "Fat Pig (Greek)", "Fat Pig (Latin)", "River Horse (Greek)", … ]
// ​​
// question: "What does &quot;hippopotamus&quot; mean and in what langauge?"
// ​​
// type: "multiple"
    {console.log(props.question.question)}
    return (
        <div className="question">
            <h2>{he.decode(props.question.question)}</h2>
            {mappedAnswers}
        </div>
        
    )
}