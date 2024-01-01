import React from 'react';


//Component where the user type the attempt to solve the mistery word
function Try({ wrongWord, attemptedWord }) {
    const ilustrate = attemptedWord.map((character, index) => (
        <span>
            {character}
        </span>
    ));
    return (
        <>
       
            return (
            <>
                <span>
                   {ilustrate}
                </span>


            </>


            );
        </>


    );
}
export default Try;