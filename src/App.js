import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const url = `https://swapi.dev/api/people`
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${url}`).then(res => {
      // console.log(res.data);
      const charData = res.data;
      setCharacters(charData)
    }).catch(err =>{
      console.error(err)
    })
  }, [url]);
  // console.log(characters);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters charData={characters}/>
    </div>
  );
}

export default App;
