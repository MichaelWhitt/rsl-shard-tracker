import React, {useEffect, useState} from 'react'
import './App.css';
import GameContainer from './Components/GameContainer'


// codex -> filter by anything, throw all champs on screen in list cards
// game

function App() {


const [champs, setChamps] = useState([])

useEffect(() => {
  loadChamps()
}, []) // will run on mount

const loadChamps = async() => {
    const res = await fetch('/api/getChamps')
    const loadedChamps = await res.json() // get the body out of res by converting it to JSON
    setChamps(loadedChamps)
}
  
  return (
    <div className="App">
      <header className="App-header">
          <GameContainer champs={champs}/>
      </header>
    </div>
  );
}

export default App;
