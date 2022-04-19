import logo from './logo.svg';
import './App.css';
import ChampList from './Components/ChampList';
import finalChampions from './finalChampList.json'
//import champs from './champs.json'

function App() {
  
  
  const champs = finalChampions?.data

  console.log('app champs', champs)
  // const aChamps = []
  // const sortedChamps = champs.sort((a, b) => {
  //   if (a.startsWith('A'))aChamps.push(a)
  //  return a.localeCompare(b)
  // })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div style={{marginBottom: 40}}>Champs</div>
          <ChampList champs={champs}/>
        </div>
      </header>
    </div>
  );
}

export default App;
