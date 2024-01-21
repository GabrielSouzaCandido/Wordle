import React from 'react';
import Try from './Try/Try';
function Tries({ lastTry }) {
 
    return (
        <>
            <div>
                <p>Last Attempted:
                    <Try wrongWord={lastTry} attemptedWord={lastTry}  />
                </p>
            </div>
            <div>
                <p></p>
            </div>
        
        </>
       

    );
}
export default Tries;