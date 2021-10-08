import axios from "axios";
import React,{useEffect, useState} from "react";
import styled from "styled-components";

const MovieDiv = styled.div`

`

const MovieBar = props =>{
    const [movies, setMovies] = useState([]);
    const {movie} = props;

    useEffect(() => {
        axios.get('https://swapi.dev/api/films').then(res =>{
            setMovies(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);
    console.log(movies.results);
    const moviesObj = movies.results;
    // console.log(movie);
    const titleArray = [];
    for(const prop in moviesObj){
        // titleArray.push(prop);
        titleArray.push(Object.values(moviesObj));
    }
    // console.log(titleArray);
    // titleArray.map(el =>{
    //     return Object.values(moviesObj);
    // })
    console.log(titleArray);
    
    // console.log(titleArray);


    return(
        <MovieDiv>
            {/* <h1>{movies.results.Keys()}</h1> */}
        </MovieDiv>
    )
}

export default MovieBar