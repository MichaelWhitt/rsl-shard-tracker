import React, {useEffect, useState} from 'react'
import './App.css';
import GameGrid from './Components/Game/GameGrid'
import Codex from './Components/Codex/Codex'
import localChampions from './finalChampList.json'


function App() {

const [champs, setChamps] = useState([])
const [scores, setScores] = useState([])
const [codex, setCodex] = useState(true)

//programmatically create champs
// const createChamp = async() => {
//   finalChampList.data.map(v => {
//     return axios.post('/api/createChamp', v).then((response) => console.log(response)).catch((err) => console.log(err))
//   })
// }

useEffect(() => {
  //loadChamps()
  //loadScores()
}, []) // will run on mount

const loadChamps = async() => {
    const res = await fetch('/api/getChamps')
    const loadedChamps = await res.json() // get the body out of res by converting it to JSON
    const localChamps = localChampions.data
    loadedChamps ? setChamps(loadedChamps) : setChamps(localChamps)
}

const loadScores = async() => {
  const res = await fetch('/api/getScores')
  const loadedScores = await res.json() // get the body out of res by converting it to JSON
  
  setScores(loadedScores)
}
  
  return (
      <div className="App-Container">
        <div>
          <button className='screenMode' style={{background: codex ? '#9fe2ba': null, borderRadius: '15px 0 0 15px'}} onClick={() => setCodex(true)}>Codex</button>
          <button className='screenMode' style={{background: codex ? null : '#9fe2ba', borderRadius: '0 15px 15px 0'}} onClick={() => setCodex(false)}>Game</button>
        </div>
        {codex ? <Codex champs={champs}/> : <GameGrid champs={champs} scores={scores}/>}
          
        {/* <button onClick={() =>createChamp()}>Send</button> */}
      </div>
  );
}

export default App;
