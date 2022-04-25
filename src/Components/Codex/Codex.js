import React from 'react';
import styles from './styles.module.css'
import testChamps from '../../finalChampList.json'

export default class Codex extends React.Component {

    state = {
        filteredValue: 'Rarity'
    }


    render(){
        const {filteredValue} = this.state
        //const {champs} = this.props
        const champs = testChamps.data

        const ChampCard = ({c, i}) => {
            return(
                <div className={`${styles.champCard}`} style={{background: c.rarity === 'Epic' ? '#a865c9' : 'rgb(220, 191, 26)' }} key={i}>
                    <div style={{display:'flex'}}>
                        <div style={{position: 'relative', left: 0, top: 0}}>
                            <img src={c.image} height={175} style={{borderRadius: '15px 0 0 15px'}} alt={c.name} />
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{fontWeight: 700, fontSize: 28, marginLeft: 30}}>{c.name}<div style={{fontSize: 20, fontWeight: 400}}>{`  [${c.rarity}]`}</div></div>
                            <div>
                                <div style={{marginLeft: 30}}>
                                    <div>Faction: {c.faction}</div>
                                    <div>Race: {c.race}</div>
                                </div>
                                <div style={{marginLeft: 30}}>
                                    <div>Affinity: {c.affinity}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        const Rarity = () => {
            return(
                <div className={`${styles.filterContainer}`}>
                    <div style={{display: 'flex', width: '100vw'}}>
                        <div className='break' style={{fontSize: '2rem', color: 'gold', width: '50vw'}}>
                            <div style={{fontWeight: 'bold', marginLeft: '25%'}}>Legendaries (A-Z)</div>
                            {champs.sort((a, b) => a.name.localeCompare(b.name)).filter(r => r.rarity === 'Legendary').map((c, i) => {
                                return <ChampCard key={i} c={c} type={'l'}/>
                            })}
                        </div>
                        <div className='break' style={{fontSize: '2rem', color: 'purple', width: '50vw'}}>
                            <div style={{fontWeight: 'bold', marginLeft: '38%'}}>Epics (A-Z)</div>
                            {champs.sort((a, b) => a.name.localeCompare(b.name)).filter(r => r.rarity === 'Epic').map((c, i) => {
                                    return <ChampCard key={i} c={c} type={'e'}/>
                            })}
                        </div>
                    
                    </div>
                </div>
            )
        }
    
        const Faction = () => {
            console.log(champs)
            return(
                <div className={`${styles.filterContainer}`}>
                    Faction
                    {champs.map((c, i) => {
                        return <ChampCard key={i} c={c} />
                    })}
                </div>
            )
        }
    
        const Race = () => {
            return(
                <div className={`${styles.filterContainer}`}>
                    Race
                </div>
            )
        }

        const Type = () => {
            return(
                <div className={`${styles.filterContainer}`}>
                    Type
                </div>
            )
        }

        const NameA = () => {
            return(
                <div className={`${styles.filterContainer}`}>
                    NameA
                </div>
            )
        }

        const NameZ = () => {
            return(
                <div className={`${styles.filterContainer}`} >
                    NameZ
                </div>
            )
        }

        const filterResults = (v) => {
        
        }

        return(
            <div style={{width: '95vw', height: '100vh', textAlign: 'left'}}>
                <div>Filter By: </div>
                <div style={{width: '50%', marginTop: 20}}>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Rarity'})} 
                        style={{borderRadius: '15px 0 0 15px', background: filteredValue === 'Rarity' ? 'white' : null}}>
                            Rarity
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Faction'})}
                        style={{background: filteredValue === 'Faction' ? 'white' : null}}>
                            Faction
                    
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Race'})}
                        style={{background: filteredValue === 'Race' ? 'white' : null}}>
                            Race
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Type'})}
                        style={{background: filteredValue === 'Type' ? 'white' : null}}>
                            Type
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'A-Z'})}
                        style={{background: filteredValue === 'A-Z' ? 'white' : null}}>
                            Name A-Z
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Z-A'})} 
                        style={{borderRadius: '0 15px 15px 0', background: filteredValue === 'Z-A' ? 'white' : null}}>
                            Name Z-A
                    </button>
                </div>
                <div style={{marginTop: 20}}>
                    {filteredValue === 'Rarity' ? <Rarity /> : null}
                    {filteredValue === 'Faction' ? <Faction /> : null}
                    {filteredValue === 'Race' ? <Race /> : null}
                    {filteredValue === 'Type' ? <Type /> : null}
                    {filteredValue === 'NameA' ? <NameA /> : null}
                    {filteredValue === 'NameZ' ? <NameZ /> : null}
                </div>
            </div>
        )
    }
}