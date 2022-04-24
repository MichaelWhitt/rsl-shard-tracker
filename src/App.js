import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './App.css';
import GameContainer from './Components/GameContainer'
import finalChampList from './finalChampList.json'


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
  loadChamps()
}, []) // will run on mount

const loadChamps = async() => {
    const res = await fetch('/api/getChamps')
    const loadedChamps = await res.json() // get the body out of res by converting it to JSON
    setChamps(loadedChamps)
    champs.map(c => console.log(c.name))
}
  
  return (
    <div className="App">
      <header className="App-header">
          <GameContainer champs={champs}/>
          {/* <button onClick={() =>createChamp()}>Send</button> */}
      </header>
    </div>
  );
}

export default App;
