import React from 'react'
import localChamps from '../finalChampList.json'


const GameContainer = ({champs}) => {
    // matching game 2x2 flip tiles
    // type the name of the champ
    // click the affinity rarity race faction etc
    // double image vs each other, affinity war
    // guess which stat is highest or stat wars (cardiel attack vs marksman attack)

    
    // codex

    const Champ = (props) => {
        
        
        return(
            <div>
              {champs ? champs.map( (l,i) => {
                  
                return (
                    <div key={i} style={{color: '#000'}}>
                        <div><img src={l.image} width={100} alt={`${l.name}`}/></div>
                        <div style={{marginBottom: 50}}>{l.name}</div>
                    </div>
                )
              }): null}
            </div>
        )
    }

    


    
    
    return(
        <div className='gameContainer' style={{display: 'flex', overflowY: 'scroll'}}>
            <Champ />
          
        </div>
    )
}

export default GameContainer