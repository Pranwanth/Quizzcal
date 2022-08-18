import React  from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function QuizPage(){
    const [quizData, setQuizData] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => setQuizData(data.results))
    }, [])
    const questionCards = quizData.map(card => {
        const id = nanoid()
        return(
            <div>
                <Question 
                    key={id}
                    question={card.question}
                    correctAnswer={card.correct_answer}
                    incorrectAnswers={card.incorrect_answers}
                />
                <hr />
            </div>
        )  
    })
    return(
        <div>
            {questionCards}
        </div>
    )
}