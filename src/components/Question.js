import { nanoid } from 'nanoid'
import React from 'react';

export default function Question(props){
    const [options, setOptions] = React.useState([])
    React.useEffect(() => {
        const shuffledOptions = shuffle(props.incorrectAnswers.concat(props.correctAnswer))
        setOptions(shuffledOptions)
    }, [props.incorrectAnswers, props.correctAnswer])
    function shuffle(array) {
        let currentIndex = array.length
        let randomIndex
      
        //Implemented usinng Fisher-Yates shuffle
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    function convertStringToHTMLText(str){
        let parser = new DOMParser()
        let doc = parser.parseFromString(str, 'text/html')
        return doc.body.textContent
    }

    function checkOption(option, id){
        /* if(option === props.correctAnswer)
        {
            props.updateCorrectCount(prevCount => prevCount + 1)
        } */ //This is causing the shuffle to run twice
        const btn = document.getElementById(id)
        btn.style.backgroundColor = "#D6DBF5"
    }

    
    
    const optionElements = options.map(option => {
        const id = nanoid()

        return(
            <button key={id} id = {id} className='quiz_options' onClick={() => checkOption(option, id)}>{convertStringToHTMLText(option)}</button>
        )
    })
    return(
        <div className='questionCard'>
            <h3 className='questionCardHeader'>{convertStringToHTMLText(props.question)}</h3>
            <div className='quiz_options_container'>
                {optionElements}
            </div>
        </div>
    )
}