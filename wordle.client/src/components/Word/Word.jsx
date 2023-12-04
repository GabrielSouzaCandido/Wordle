import React from 'react';
import './Word.css';
import { useState } from 'react';

function Word(onTextInput) {
    const [word, setWord] = useState([Array(6).fill("_")]);
    const [wordClass, setClass] = useState([Array(6).fill("Spotlight")]);
    const [currentMove, setCurrentMove] = useState(0);

    const handleKeyPress = (event) => {

    
        const nextWord = [...word];
        const nextClass = [...wordClass];
        let nextMove = currentMove + 1;
        let newClass = "noClass";
        if (nextMove > word[0].length - 1) nextMove = 0;
        nextWord[0][currentMove] = event.key;
        console.log(nextClass);
        nextClass[0][currentMove] = newClass;
        console.log(nextClass);

        setCurrentMove(nextMove);
        setWord(nextWord);
        setClass(nextClass);


    };
    const ilustrate = word.map((character, index) => {       
        return (
            <li key={index} tabIndex={index} onKeyDown={handleKeyPress} className={wordClass[0][index]}>
                <span key={index}>{word[index]}</span>
            </li>
        )

    });
    return (
        <div>

            <p>{ilustrate}</p>
        </div>
    );

}
export default Word;