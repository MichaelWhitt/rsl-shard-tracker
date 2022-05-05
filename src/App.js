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
  loadScores()
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
        <div style={{display: 'flex', background: 'rgb(50, 0, 200)', justifyContent: 'flex-start', alignItems:'flex-start', padding: 20}}>
          <button className='screenMode' style={{background: codex ? 'cyan': 'white', borderRadius: '5px 0 0 5px', fontWeight: 700, fontSize: 20}} onClick={() => setCodex(true)}>Codex</button>
          <button className='screenMode' style={{background: codex ? 'white' : 'cyan', borderRadius: '0 5px 5px 0', fontWeight: 700, fontSize: 20}} onClick={() => setCodex(false)}>Game</button>
        </div>
        {codex ? <Codex champs={champs}/> : <GameGrid champs={champs} scores={scores}/>}
        {/* <button onClick={() =>createChamp()}>Send</button> */}
      </div>
  );
}

export default App;
