import React from 'react';
import './App.css';
import CharacterList from "./components/CharacterList"

const App = () => {
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      <CharacterList />
    </div>
  );
}

export default App;
