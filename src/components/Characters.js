import React from "react";
import Character from './Character'

const Characters = props =>{
    const {charData} = props;

    return(
        <div>
            {charData.map((char, index) => {
                return <Character charData={char} key={index}/>
            })}   
        </div>
    )
    
}

export default Characters