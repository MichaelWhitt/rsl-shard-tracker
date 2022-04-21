import React from "react"
import cardielImg from '../Assets/cPics/5760.png'

export default class ChampList extends React.Component {

render(){
    const {champs} = this.props
    const arr = champs.map( c => c.name)
    
    
    // const aChamps = []
    // const sortedChamps = legendary.sort((a, b) => {
    // if (a.name.startsWith('A')) aChamps.push(a)
    //  return a.name.localeCompare(b)
    // })
    // console.log(aChamps)
    

    return(
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            
            <div style={{fontSize: '3.5rem', textAlign: 'left'}}>
                <div style={{color: 'gold'}}>Legendaries</div>
                {champs ? champs.map( (c, i) => c.rarity === "Legendary" ? <div key={i} style={{fontSize: 30, textAlign: 'left'}}>{c.name}</div> : null) : null}
            </div>
            

            <div style={{fontSize: '3.5rem', textAlign: 'left'}}>
                <div style={{color: '#ff00ff'}}>Epics</div>
                {champs ? champs.map( (c, i) => c.rarity === "Epic" ? <div key={i} style={{fontSize: 30, textAlign: 'left'}}>{c.name}</div> : null) : null}
            </div>
            <div><img src={require('../Assets/cPics/5760.png')} alt='Cardiel' width={60}/></div>
        </div>
    )
}
}