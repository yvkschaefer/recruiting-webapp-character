import React, { useState } from 'react';
import './App.css';
import NewCharacter from './Components/NewCharacter';

function App() {
  const [characters, setCharacters] = useState([{}])
  

  const addCharacter = index => {
    const newCharacters = [...characters]
    newCharacters.push(index)
    setCharacters(newCharacters)
}
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Coding Exercise - Kara Schaefer</h1>
            <div className="top-buttons">
              <button onClick={addCharacter}>Add New Character</button>
            </div>
        </header>
        <section className="App-section">
          {characters.map((character, index) => 
            <NewCharacter
              key={index}
                name={index+1}
                />)}
          </section>
      </div>
    )
  }

export default App;
