import React from 'react';
import './Word.css';
import { useState } from 'react';
import raw from '../../assets/BrasilianWords.txt';

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
    async function readWord(fullWord) {
        try {
            const response = await fetch(raw);
            const text = await response.text();

            // Dividir o texto em linhas e criar um array
            const wordArray = text.split('\n').map(line => line.trim());

            // Verificar se a palavra está presente no array
            return wordArray.includes(fullWord.toLowerCase());
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            return false;
        }
    }
    const handleKeyPress = (event) => {

        
     
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

        if (misteryWord.toLowerCase() == word[0].join().replace(/,/g, '').toLowerCase()) {
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