import React, { useEffect, useState } from 'react'
import localChamps from '../../finalChampList.json'
import GameGrid from './GameGrid'


const GameContainer = () => {
    
    // matching game 2x2 flip tiles
    // type the name of the champ
    // click the affinity rarity race faction etc
    // double image vs each other, affinity war
    // guess which stat is highest or stat wars (cardiel attack vs marksman attack)


    return(
        <div >
            <GameGrid champs={localChamps.data}/>
        </div>
    )
}

export default GameContainer