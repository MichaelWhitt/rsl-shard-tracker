import React, { useEffect, useState } from 'react'
import champDefaults from '../finalChampList.json'


const GameContainer = ({champs}) => {
    // matching game 2x2 flip tiles
    // type the name of the champ
    // click the affinity rarity race faction etc
    // double image vs each other, affinity war
    // guess which stat is highest or stat wars (cardiel attack vs marksman attack)

    
    // codex

    
console.log('cham,ps', champs)
    const Champ = () => {
        
        return(
            <div>
              {champDefaults.data.map( (l,i) => {
                  //const image = +l.image.match(/\d+/)[0]
                  //const image = JSON.stringify(l.image).slice(1, -1)
                  
                return (
                    <div key={i} style={{color: '#000'}}>
                        <div><img src={l.image} width={50} alt={`${l.name}}`}/></div>
                        <div style={{marginBottom: 50}}>{l.name}</div>
                    </div>
                )
              })}
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