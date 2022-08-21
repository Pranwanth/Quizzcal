import React  from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function QuizPage(){
    const [quizData, setQuizData] = React.useState([])
    const [correctCount, setCorrectCount] = React.useState(0)
    const [displayResult, setDisplayResult] = React.useState(false)

    function checkAnswer(){
        setDisplayResult(true)
    }
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => setQuizData(data.results))
    }, [])
    const questionCards = quizData.map(card => {
        const divId = nanoid()
        const id = nanoid()
        const hrId = nanoid()
        return(
            <div key={divId}>
                <Question 
                    key={id}
                    question={card.question}
                    correctAnswer={card.correct_answer}
                    incorrectAnswers={card.incorrect_answers}
                    updateCorrectCount={setCorrectCount}
                />
                <hr className="question_line_break" key={hrId}/>
            </div>
        )  
    })
    return(
        <div className="quizPage">
            {questionCards}
            <button className="checkAnswerBtn" onClick={checkAnswer}>Check answers</button>
            {displayResult ?  <h3>{correctCount}/5</h3> : ""}
        </div>
    )
}