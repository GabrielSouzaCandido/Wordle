import React from 'react';
import './Tip.css';


function Tip({ ListOfTips, ListOfClass }) {
    console.log(ListOfClass[0]);


    return (
        <>
            The character is from&nbsp;
            
            <span className={ListOfClass[0]}>
                {ListOfTips[0]}
            </span><br />

            The character rarity is&nbsp;

            <span className={ListOfClass[1]}>
                {ListOfTips[1]}*
            </span> <br />

            The character uses a&nbsp;

            <span className={ListOfClass[2]}>
                {ListOfTips[2]}
            </span>
        </>
       

    );
}
export default Tip;