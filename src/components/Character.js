// Write your Character component here
import React from "react";
import styled from "styled-components";
import MovieBar from './MovieData'

const CharDiv = styled.div`
    width: 75%;
    background-color: black;
    color: white;
    border-style: solid;
    border-color: lightgreen;
    border-radius: 10%;
    display: flex;
    justify-content: space-around;
    margin: 5% auto;

    .dob{
        border-radius: 10%;
        background-color: lightgrey;
        color: black;
    }

    button{
        height: 8%;
        margin: auto 0;
        color: white;
        background-color: darkgrey;
    }
`
const Character = props => {
    const {charData} = props;

    return(
        <CharDiv>
            <button>{charData.name}</button>
            <h2 className='dob'>{charData.birth_year}</h2>
            <MovieBar movie={charData.films}/>
        </CharDiv>
    );
}

export default Character