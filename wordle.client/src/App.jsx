import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    return (
        <>
        <div id="titleDiv">
            <h1 id="titleLabel">Wordle</h1>
                <p>
                    Tip:      
                    <span class="hideTip">
                        work-in-progress
                    </span>
                </p>
            --
        </div>
        <div id="footer">      
        <p>&copy; 2023 Git/GabrielSouzaCandido.</p>
        </div>
        </>
    );
    
}

export default App;