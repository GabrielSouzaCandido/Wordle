import React from 'react';
import './Word.css';
import { useState } from 'react';


//Component where the user type the attempt to solve the mistery word
function Word({ word, wordClass, misteryWord, currentMove, onKeyDown }) {

 
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