import React from 'react'
import GameChampCard from './GameChampCard'
import localChamps from '../../finalChampList.json'

const ConstructChamps = ({champions}) => {
    const randomChamp = () => (Math.random() * (387 - 0) + 0).toFixed(0)

    return(
        <div>
            <GameChampCard random={randomChamp} totalChamps={champions.length !== 0 ? champions : localChamps.data}/>
        </div>
    )
}


const GameGrid = (props) => {
    const champs = props.champs

    

    return(
        <div style={{width: 1200, height: 700, background: 'black', margin: '50px 0', borderRadius: 15}}>
            <ConstructChamps champions={champs} />
        </div>
    )
}

export default GameGrid