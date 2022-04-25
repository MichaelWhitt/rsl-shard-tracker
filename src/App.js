import React, {useEffect, useState} from 'react'
import './App.css';
import GameContainer from './Components/GameContainer'
import Codex from './Components/Codex/Codex'
import localChampions from './finalChampList.json'


// codex -> filter by anything, throw all champs on screen in list cards
// game

function App() {

const [champs, setChamps] = useState([])

//programmatically create champs
// const createChamp = async() => {
//   finalChampList.data.map(v => {
//     return axios.post('/api/createChamp', v).then((response) => console.log(response)).catch((err) => console.log(err))
//   })
// }

useEffect(() => {
  //loadChamps()
}, []) // will run on mount

const loadChamps = async() => {
    const res = await fetch('/api/getChamps')
    const loadedChamps = await res.json() // get the body out of res by converting it to JSON
    const localChamps = localChampions.data
    loadedChamps ? setChamps(loadedChamps) : setChamps(localChamps)
}
  
  return (
    <div className="App">
      <header className="App-header">
          <Codex champs={champs}/>
          <GameContainer champs={champs}/>
          {/* <button onClick={() =>createChamp()}>Send</button> */}
      </header>
    </div>
  );
}

export default App;
