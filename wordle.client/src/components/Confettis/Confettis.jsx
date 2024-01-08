import React, { useState } from 'react';
import Confetti from 'react-confetti';
function Confettis({ showConfettis }){
    



    return (
        <div>

            {showConfettis && (
                <Confetti
                    numberOfPieces={1000}
                    recycle={false}
                />
            )}
        </div>
    );
};
export default Confettis;