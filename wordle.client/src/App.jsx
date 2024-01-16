import { useEffect, useState } from 'react';
import { Word, Tries, Tip, Confettis } from './components';
import './App.css';
import raw from './assets/Words.txt';
import audio from './assets/ConfettiSoundEffect.mp3';

function App() {
    const [wordAndTips, setWordAndTips] = useState('');
    const [rightWord, setRightWord] = useState("");
    const [word, setWord] = useState([]);
    const [wordClass, setClass] = useState([]);
    const [alreadyWon, setAlreadyWon] = useState(false);
    const [tipClass, setTipClass] = useState("");
    const [currentMove, setCurrentMove] = useState(0);
    const [lastTries, setLastTries] = useState("");
    const [previousAttempts, setPreviousAttempts] = useState([null]);
    const [isRunning, setIsRunning] = useState(false);

    function showConfettis(){
        setIsRunning(true);
    };
    function isTheRightWord(attempt) {
        if (rightWord == attempt.toLowerCase()) return true;
        return false;
    }
    function rightAttempt() {
        new Audio(audio).play();       
        showConfettis();
        showAllTips();
        setAlreadyWon(true);
    }
    function showOneTip() {
        for (var i = 0; i < tipClass.length; i++) {
            if (tipClass[i] == "hideTip") {
                let tipCopy = [...tipClass];
                tipCopy[i] = "";
                setTipClass(tipCopy);
                return;
            }
        }
        
    }
    function showAllTips() {
        let tipCopy = [...tipClass];
        for (var i = 0; i < tipClass.length; i++) {
            if (tipClass[i] == "hideTip") {
                tipCopy[i] = "";
             
            }
        }
        setTipClass(tipCopy);
    }
    function addNewTry(newTry) {
        const newAttempt = newTry;       
        let attempts = [...previousAttempts];
        let lengthToRead = previousAttempts.length;

        if (previousAttempts[0] === null) {
            lengthToRead = 0;
        }

        attempts[lengthToRead] = newTry;

        if (isTheRightWord(newTry)) {
            rightAttempt(newTry);
        } else {
            showOneTip();

            setWord([Array(rightWord.length).fill('_')]);
            setClass([Array(rightWord.length).fill('Spolight')]);
            setCurrentMove(0);
        }

        setPreviousAttempts(attempts);
        setLastTries(newAttempt);
   
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7252/WordleOperation/FetchWordAndTips', {
                    method: 'POST',
                });

                const data = await response.text();
                let dataArray = data.split(',');           
                const result = data.split(',')[0];
                dataArray = dataArray.filter(item => item !== result);


                setRightWord(result);
                setWordAndTips(dataArray);
                setWord([Array(result.length).fill('_')]);
                setClass([Array(result.length).fill('Spolight')]);
                setTipClass(Array(3).fill('hideTip'));
                console.log(result);
            } catch (error) {
                console.error('Erro ao buscar palavras e dicas:', error);
                setWordAndTips('');
            }
        };

        fetchData();
    }, []); 


    const handleKeyDown = (event) => {


     
        const nextWord = [...word];
        const nextClass = [...wordClass];
        let nextMove = currentMove;
        let newClass = "noClass";
        let isWord = false;
        if ((/^[a-zA-Z]$/.test(event.key) || event.key === 'Backspace') && !alreadyWon) {

            if (event.key === 'Backspace' && (currentMove > 0 || nextWord[0][word.length] != "-")) {

                if (nextMove == 0 && nextWord[0][5] != "-") nextMove = word[0].length - 1;
                nextWord[0][nextMove - 1] = '_';
                nextClass[0][nextMove - 1] = newClass;

                console.log(nextWord[0][5]);
                setCurrentMove(nextMove - 1);
                setWord(nextWord);
                setClass(nextClass);
            } else if (event.key != 'Backpace' && nextMove < word[0].length) {
                let nextMove = currentMove + 1;
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
                        const wordArray = text.split('\n').map(line => line.split(',')[0].trim().toLowerCase());

                        if (wordArray.includes(word[0].join().replace(/,/g, '').toLowerCase())) {
                         
                            if (nextMove == word[0].length) addNewTry(word[0].join().replace(/,/g, ''));
                        }
               
                    })
                    .catch(error => {
                        console.error(error);
                    });


            }
        }






    };

    return (
        <>
            <div id="titleDiv" >
                <h1 id="titleLabel">Wordle</h1>

                <h2 id="subtitleLabel">Teyvat Edition</h2>

                <Confettis showConfettis={isRunning} />
                <p>
                    <Tip ListOfTips={wordAndTips} ListOfClass={tipClass} />
                   
                </p>
                <Word word={word} wordClass={wordClass} currentMove={currentMove} misteryWord={rightWord} onKeyDown={(event) => handleKeyDown(event)} />
                <Tries lastTry={previousAttempts} />
        </div>
        <div id="footer">      
        <p>&copy; 2024 Git/GabrielSouzaCandido.</p>
        </div>
        </>
    );
    
}

export default App;