import React, {useState} from 'react';
import './App.css';
import CharacterList from "./components/CharacterList"
import SearchBar from "./components/SearchBar"







const App = () => {
  
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')


const search = ( event ) => {
  const value = document.querySelector('input').value;
  setUrl( `https://rickandmortyapi.com/api/character/?name=${ value }` )
  event.preventDefault();
  
}   

  





  return (
    <div className="App">
      <h1 className="Header">WUBBA LUBBA DUB-DUB</h1>
      <SearchBar onSubmit={search}/>
      <CharacterList link={url}/>
    </div>
  );
}

export default App;
