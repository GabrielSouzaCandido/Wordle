import React from 'react';
import Try from './Try/Try';
//Component where the user type the attempt to solve the mistery word
function Tries(word) {
 
    return (
        <>
            <div>
                <p>Ultimas tentativas:
                    <Try rightWord={word} attemptedWord={ word } />
                </p>
            </div>
            <div>
                <p></p>
            </div>
        
        </>
       

    );
}
export default Tries;