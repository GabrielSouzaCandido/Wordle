import React from 'react';
import './Word.css';
import { useState } from 'react';


//Component where the user type the attempt to solve the mistery word
function Word({ word, wordClass, misteryWord, currentMove, onKeyDown }) {
    

    const ilustrate = word.map((character, index) => (
        <span key={index} tabIndex={index} onKeyDown={onKeyDown} className="Spotlight">
            {word[index]}
        </span>
    ));
    return (
        <>
            <div>
                <p>{ilustrate}</p>
            </div>
      
        
        </>
       

    );
}
export default Word;