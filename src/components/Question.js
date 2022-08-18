import { nanoid } from 'nanoid'

export default function Question(props){
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

    
    const answers = shuffle(props.incorrectAnswers.concat(props.correctAnswer))
    const answerElements = answers.map(answer => {
        const id = nanoid()

        return(
            <button key={id} className='quiz_options'>{answer}</button>
        )
    })
    return(
        <div>
            <h1>{convertStringToHTMLText(props.question)}</h1>
            <div>
                {answerElements}
            </div>
        </div>
    )
}