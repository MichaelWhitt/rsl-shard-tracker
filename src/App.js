import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ChampList from './Components/ChampList';
import finalChampions from './finalChampList.json'
import TessUpload from './Components/TesseractUpload';


function App() {
  //const champs = finalChampions?.data

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
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width: '100%', margin: 40}}>
          <div style={{marginBottom: 40, fontSize: '3rem'}}>Champions</div>
          <ChampList champs={champs}/>
          <TessUpload />
        </div>
      </header>
    </div>
  );
}

export default App;
