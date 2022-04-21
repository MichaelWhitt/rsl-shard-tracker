import React, { useEffect, useState } from 'react'
import finalChampions from '../finalChampList.json'

const GameContainer = ({champs}) => {
    // matching game 2x2 flip tiles
    // type the name of the champ
    // click the affinity rarity race faction etc
    // double image vs each other, affinity war
    // guess which stat is highest or stat wars (cardiel attack vs marksman attack)


    // codex


    const legendaries = finalChampions.data.legendary
    const epics = finalChampions.data.epic

    const Leggo = () => {
        
        return(
            <div>
              {legendaries.map( (l,i) => {
                  const image = +l.image.match(/\d+/)[0]
                  
                  
                  
                return (
                    <div key={i} style={{color: '#000'}}>
                        <div>{l.name}</div>
                        <div><img src={require(`../Assets/cPics/21010.png`)} alt={l.name} width={40} /></div>
                    </div>
                )
              })}
            </div>
        )
    }

    const Epic = () => {
        return(
            <div>
              {epics.map( (e,i) => <div key={i} style={{color: '#000'}}>{e.name}</div>)}
            </div>
        )
    }


    
    
    return(
        <div className='gameContainer' style={{display: 'flex', overflowY: 'scroll'}}>
            <Leggo />
            <Epic />
        </div>
    )
}

export default GameContainer