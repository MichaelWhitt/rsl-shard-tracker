import React, {useState, useEffect, useRef} from 'react'
import GameChampCard from './GameChampCard'

const ConstructChamps = ({champions}) => {
    const [champsArr, setChampsArr] = useState([])
    const [count, setCount] = useState(0)


    const rng = () => {
        return (Math.random() * (387 - 0) + 0).toFixed(0)
    }

    useEffect(() => {
        renderChamps()
    }, [])

    const handleChangeCount = (num) => {
        setCount(pCount => pCount + num)
    }

    // find a way to link 2 of the same together in child, then take all 8 components, shuffle, and handle state winning in child
    let winner = useRef(false)
    let nombre = useRef('')
    const getName = (n) => {
        if (n === nombre.current) {
            winner.current = true
        }
        nombre.current = n
    }


    const renderChamps = () => {
        let arr = []

        for (let i = 0; i<8; i++){
            arr.push(<GameChampCard winner={winner} getChampName={getName} changeCount={handleChangeCount} champion={champions[rng()]} id={i} />)
        }
        arr = [...arr, ...arr]
        setChampsArr(arr)

        const shuffleArr = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const x = Math.floor(Math.random() * (i + 1));
                [array[i], array[x]] = [array[x], array[i]];
            }
        }
        shuffleArr(arr)
    }

    if (count > 2 ) {
        setCount(0)
    }

    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {champsArr.map( (c, i) => {
            return (
            <div key={i} style={{width: '24%'}}>
                {c}
            </div>
            )
            })}
            
        </div>
    )
}


const GameGrid = (props) => {
    const champs = props.champs
    

    return(
        <div style={{width: 1200, height: 900, background: 'black', margin: '200px 0', borderRadius: 15}}>
            <ConstructChamps champions={champs}/>
        </div>
    )
}

export default GameGrid