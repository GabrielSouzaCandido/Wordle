import React from 'react';
import './Word.css';
import { useState } from 'react';

function Word(onTextInput) {
    const [word, setWord] = useState([Array(6).fill("_")]);
    const [wordClass, setClass] = useState([Array(6).fill("Spotlight")]);
    const [currentMove, setCurrentMove] = useState(0);
    const [lastTries, setLastTries] = useState("");
    let misteryWord = "Cavalo";

    function addNewTry(newTry) {
        if (lastTries == "") {
            setLastTries(newTry);
        } else {
            setLastTries(lastTries + "," + newTry);
        }
    }

    const handleKeyPress = (event) => {

        
     
        const nextWord = [...word];
        const nextClass = [...wordClass];
        let nextMove = currentMove;
        let newClass = "noClass";

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
                if (nextMove == word[0].length) addNewTry(word[0].join().replace(/,/g, ''));
            }
        }
       
        if (misteryWord == word[0].join().replace(/,/g, '')) {
            alert('acertou');
        }

        


    };
 

    const ilustrate = word.map((character, index) => (
        <span key={index} tabIndex={index} onKeyDown={handleKeyPress} className="Spotlight">
            {word[index]}
        </span>
    ));
    return (
        <>
            <div>
                <p>{ilustrate}</p>
            </div>
            <div>
                <p>Ultimas Tentativas:{lastTries}</p>
            </div>
        
        </>
       

    );
}
export default Word;