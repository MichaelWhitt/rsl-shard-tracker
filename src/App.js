import logo from './logo.svg';
import './App.css';
import champions from './champions.json'
import ChampList from './Components/ChampList';
import finalChampions from './finalChampList.json'
//import champs from './champs.json'

function App() {
  
  const data = champions?.data?.[0]?.factions
  // const aChamps = []
  // const sortedChamps = champs.sort((a, b) => {
  //   if (a.startsWith('A'))aChamps.push(a)
  //  return a.localeCompare(b)
  // })

  console.log(finalChampions.data.legendary[0].name)
  
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
