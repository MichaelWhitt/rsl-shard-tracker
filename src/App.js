import logo from './logo.svg';
import './App.css';
import ChampList from './Components/ChampList';
import finalChampions from './finalChampList.json'
//import champs from './champs.json'

function App() {
  const champs = finalChampions?.data
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width: '100%', margin: 40}}>
          <div style={{marginBottom: 40, fontSize: '3rem'}}>Champions</div>
          <ChampList champs={champs}/>
        </div>
      </header>
    </div>
  );
}

export default App;
