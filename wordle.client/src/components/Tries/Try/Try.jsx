import React from 'react';


//Component where the user type the attempt to solve the mistery word
function Try({ wrongWord,attemptedWord }) {
  

    return (
        <>
            {attemptedWord.join(',')}

        </>


    );
}
export default Try;