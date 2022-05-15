import React, {useState} from 'react'
import GameChampCard from './GameChampCard'
import localChamps from '../../finalChampList.json'
import styles from './styles.module.css'


const ConstructChamps = ({champions, playing, togglePlaying}) => {
    const randomChamp = () => (Math.random() * (387 - 0) + 0).toFixed(0)
    //console.log('server champs', champions)
    //add breakpoints for game container and leaderboards

    return(
        <div>
            <GameChampCard random={randomChamp} playing={playing} togglePlaying={togglePlaying} totalChamps={champions.length !== 0 ? champions : localChamps.data}/>
        </div>
    )
}

const GameGrid = (props) => {
    const champs = props?.champs
    const scores = props?.scores
    const [playing, setPlaying] = useState(false)

    const toggleGame = () => {
        playing ? setPlaying(false) : setPlaying(true)
    }

    return(
            <div style={{display: 'flex', width: '100vw', height: '85vh', background: 'black'}}>
                <div style={{width: '75%'}}>
                    {playing ? <ConstructChamps champions={champs} playing={playing} togglePlaying={setPlaying} /> :
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <div style={{marginTop: 100}}>
                            Rules
                                <div style={{textAlign: 'left'}}>
                                    <div style={{marginTop: 15, fontSize: 20}}>1. 30 Second Timer Immediately Starts</div>
                                    <div style={{marginTop: 15, fontSize: 20}}>2. Right Answer, Score +1 </div>
                                    <div style={{marginTop: 15, fontSize: 20}}>3. Wrong Answer, Score -1</div>
                                </div>
                        </div>
                        <div style={{position: 'relative', bottom: -150}}>
                            <button className={`${styles.startButton}`} onClick={() => toggleGame()}>Start</button>    
                        </div>
                    </div>
                    }
                </div>
                <div style={{width: '20%', background: 'rgb(50, 0, 255', marginTop: 10, boxShadow: '0 0 5px cyan', borderRadius: 10}}>
                    <div style={{
                        background: 'cyan', 
                        color: 'black', 
                        fontWeight: 700, 
                        fontSize: 25, 
                        marginTop: 15,
                        padding: 5,
                        margin: '0 auto',
                        width: '96%', 
                        borderRadius: 10, 
                        boxShadow: '0 0 5px #000'}}>
                            Global Leaderboards
                        </div>
                        {scores ? 
                        <div style={{marginTop: 10}}>
                            <div style={{fontSize: 20, fontWeight: 700}}>
                                <table style={{width: '100%'}}>
                                    <tbody>
                                    <tr style={{background: '#000'}}>
                                        <th>Rank</th>
                                        <th>User</th>
                                        <th>Score</th>
                                    </tr>
                                    {scores.map( (record, i )=> {
                                    return <tr key={i}>
                                                <td style={{width: '15%'}}>{i+1}</td>
                                                <td >{record.user}</td>
                                                <td >{record.score}</td>
                                            </tr>
                                })}
                                    </tbody>
                                    
                                   
                                </table>
                            </div>

                        </div>
                        : 
                        <div style={{fontSize: 15, textAlign: 'left' , fontWeight: 700}}>
                            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                <span>1</span>
                                <span>Fluxation</span>
                                <span>44</span>
                                <span>110s</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                <span>2</span>
                                <span>Hell Hades</span>
                                <span>44</span>
                                <span>111s</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                <span>3</span>
                                <span>Macchan</span>
                                <span>44</span>
                                <span>112s</span>
                            </div>
                        </div>
                            }
                </div>
            </div>
        
    )
}

export default GameGrid