import logo from './logo.svg';
import './App.css';
import champs from './champs.json'
import champions from './champions.json'
import ChampList from './Components/ChampList';

function App() {
  //console.log(champs[0]) scraped champs didnt include updated list
  const data = champions?.data?.[0]?.factions
  const aChamps = []
  const sortedChamps = champs.sort((a, b) => {
    if (a.startsWith('A'))aChamps.push(a)
   return a.localeCompare(b)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div style={{marginBottom: 40}}>Champs</div>
          <ChampList data={data}/>
        </div>
      </header>
    </div>
  );
}

export default App;
