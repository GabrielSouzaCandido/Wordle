import { useEffect, useState } from 'react';
import { Word } from './components';
import './App.css';

function App() {


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
            <Word/>
        </div>
        <div id="footer">      
        <p>&copy; 2023 Git/GabrielSouzaCandido.</p>
        </div>
        </>
    );
    
}

export default App;