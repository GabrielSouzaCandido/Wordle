import React from 'react';
import './Tip.css';
import { useState } from 'react';


//Component where the user type the attempt to solve the mistery word
function Tip({ ListOfTips }) {

  
    return (
        <>
            The character is from 
            <span className="hideTip">
               {ListOfTips[0]}
            </span><br />
            The character rarity is
            <span className="hideTip">
                {ListOfTips[1]}
            </span> <br/>
            The character uses a
            <span className="hideTip">
                {ListOfTips[2]}
            </span>
        </>
       

    );
}
export default Tip;