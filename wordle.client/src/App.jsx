import { useEffect, useState } from 'react';
import { Word,Tries } from './components';
import './App.css';
import raw from './assets/Words.txt';
function App() {
    let misteryWord = "Venti";
    const [word, setWord] = useState([Array(5).fill("_")]);
    const [wordClass, setClass] = useState([Array(5).fill("Spotlight")]);
    const [currentMove, setCurrentMove] = useState(0);
    const [lastTries, setLastTries] = useState("");
    const [previousAttempts, setPreviousAttempts] = useState([Array(5)]);


    function addNewTry(newTry) {
        const attempts = [...previousAttempts];
        attempts[previousAttempts.length] = newTry;
        setPreviousAttempts(attempts);
        console.log(previousAttempts);
    }

    const handleKeyDown = (event) => {



        const nextWord = [...word];
        const nextClass = [...wordClass];
        let nextMove = currentMove;
        let newClass = "noClass";
        let isWord = false;
        if (/^[a-zA-Z]$/.test(event.key) || event.key === 'Backspace') {

            if (event.key === 'Backspace' && (currentMove > 0 || nextWord[0][5] != "-")) {

                if (nextMove == 0 && nextWord[0][5] != "-") nextMove = word[0].length - 1;
                nextWord[0][nextMove - 1] = '_';
                nextClass[0][nextMove - 1] = newClass;

                console.log(nextWord[0][5]);
                setCurrentMove(nextMove - 1);
                setWord(nextWord);
                setClass(nextClass);
            } else if (event.key != 'Backpace' && nextMove < word[0].length) {
                let nextMove = currentMove + 1;


                /*     if (nextMove > word[0].length - 1) nextMove = 0;*/
                nextWord[0][currentMove] = event.key;
                nextClass[0][currentMove] = newClass;

                console.log(nextClass);
                console.log(nextClass);


                setCurrentMove(nextMove);
                setWord(nextWord);
                setClass(nextClass);

                fetch(raw)
                    .then(r => r.text())
                    .then(text => {
                        const wordArray = text.split('\n').map(line => line.trim());
                        if (wordArray.includes(word[0].join().replace(/,/g, '').toLowerCase())) {

                            if (nextMove == word[0].length) addNewTry(word[0].join().replace(/,/g, ''));
                        }

                    });


            }
        }

        //if (misteryWord.toLowerCase() == word[0].join().replace(/,/g, '').toLowerCase()) {
        //    alert('acertou');
        //}





    };

    return (
        <>
            <div id="titleDiv" >
            <h1 id="titleLabel">Wordle</h1>
                <p>
                    <span className="bold">Tip:</span>   
                    <span className="hideTip">
                        work-in-progress
                    </span>
                </p>
                <Word word={word} wordClass={wordClass} currentMove={currentMove} misteryWord={misteryWord} onKeyDown={(event) => handleKeyDown(event)} />
                <Tries word={misteryWord} />
        </div>
        <div id="footer">      
        <p>&copy; 2023 Git/GabrielSouzaCandido.</p>
        </div>
        </>
    );
    
}

export default App;