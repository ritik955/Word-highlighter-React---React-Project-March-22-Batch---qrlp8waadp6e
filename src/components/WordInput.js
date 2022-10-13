import React from 'react';

export const WordInput = ({handleChange,value}) => {
    return (
        <>   
            <label htmlFor="word-input">Enter word to be highlighted here</label>
            <input id="word-input" type={"text"} onChange={(e)=>handleChange(e.target.value)} value={value}/>
        </>
    )
}
