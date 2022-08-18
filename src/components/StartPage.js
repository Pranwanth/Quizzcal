export default function StartPage(props){
    return(
        <div className="start-page">
            <h1 className="start-header">Quizzcal</h1>
            <p className="start-description">Ready to test your knowledge with Quizzcal?</p>
            <button className="start-button" onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}