import React, { useEffect, useState } from 'react'
import localChamps from '../finalChampList.json'


const GameContainer = () => {
    const [number, setNumber] = useState(0)
    const [numberArr, setNumberArr] = useState([])
    const champs = localChamps.data
    // matching game 2x2 flip tiles
    // type the name of the champ
    // click the affinity rarity race faction etc
    // double image vs each other, affinity war
    // guess which stat is highest or stat wars (cardiel attack vs marksman attack)

    
    // codex

    useEffect(() => {
        rng(0, 387)
    }, [])

    const rng = (min, max) => {
        const numArr = []
        for(let i = 0; i<8; i++){
            if(!numArr.includes(number))numArr.push((Math.random() * (max - min) + min).toFixed(0))
        }
        setNumberArr(numArr)
        setNumber((Math.random() * (max - min) + min).toFixed(0))
    }

    const ConstructGrid = () => {
        let champOne
        let champTwo
        let champThree
        let champFour
        let champFive
        let champSix
        let champSeven
        let champEight
        if (numberArr) {
            champOne = champs[numberArr[0]]?.image
            champTwo = champs[numberArr[1]]?.image
            champThree = champs[numberArr[2]]?.image
            champFour = champs[numberArr[3]]?.image
            champFive = champs[numberArr[4]]?.image
            champSix = champs[numberArr[5]]?.image
            champSeven = champs[numberArr[6]]?.image
            champEight = champs[numberArr[7]]?.image
        }
        

        return(
            <div style={{width: 1200, height: 900, background: 'black', margin: '200px 0', borderRadius: 15}}>
                <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 15}}>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champOne} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champTwo} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champThree} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champFour} height={200} width={175} /></div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 15}}>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champFive} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champSix} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champSeven} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champEight} height={200} width={175} /></div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 15}}>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champOne} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champTwo} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champThree} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champFour} height={200} width={175} /></div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 15}}>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champFive} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champSix} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champSeven} height={200} width={175} /></div>
                    <div className='champFlipCard' style={{border: '1px solid', width: 175, height: 200}}><img src={champEight} height={200} width={175} /></div>
                </div>
            </div>
        )
    }


    return(
        <div >
           <ConstructGrid />
        </div>
    )
}

export default GameContainer