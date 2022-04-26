import React, {useState} from 'react';
import styles from './styles.module.css'
import testChamps from '../../finalChampList.json'
import defenseIcon from '../../../src/icons/shield.png'
import attackIcon from '../../../src/icons/sword.png'
import hpIcon from '../../../src/icons/hp.png'
import supportIcon from '../../../src/icons/support.png'

export default class Codex extends React.Component {

    state = {
        filteredValue: 'Faction',
        list: true
    }

    render(){
        const {filteredValue, list} = this.state
        //const {champs} = this.props
        const champs = testChamps.data

        const ChampCard = ({c, i}) => {
            //filtering is defaulting to faction, find a way to change to rarity and name
            //add dynamic filter function for all options
            //bug where swapping between rarity and faction introduces a-z sorting (mutated with .sort)
            //add list view / card view
            //add champ full stats
            //add filter by stats and abilities
            //add filter by search
            //update force to Force in faunadb

            return(
                <>
                {!list ? 
                <div className={`${styles.champCard}`} style={{background: c.rarity === 'Epic' ? '#a865c9' : 'rgb(220, 191, 26)' }} key={i}>
                    <div style={{display:'flex'}}>
                        <div style={{position: 'relative', left: 0, top: 0}}>
                            <img src={c.image} height={150} style={{borderRadius: '15px 0 0 15px'}} alt={c.name} />
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{fontWeight: 700, fontSize: 28, marginLeft: 30}}>{c.name} <span style={{fontSize: 20, fontWeight: 400}}>{`  [${c.rarity}]`}</span></div>
                            <div>
                                <div style={{marginLeft: 30}}>
                                    <div>{c.race} / {c.faction}</div>
                                    <div>{c.type}</div>
                                    <div>{c.affinity}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div className={`${styles.champListCard}`}>
                    <div style={{display: 'flex'}}>
                        <img src={c.image} height={200} style={{borderRadius: '11px 0 0 0'}} alt={c.name} />
                        <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'space-around'}}>
                            <img style={{marginLeft: 10}} src={c.type === 'Attack' ? attackIcon:
                            c.type === 'Defense' ? defenseIcon: 
                            c.type === 'Support' ? supportIcon: 
                            c.type === 'HP' ? hpIcon:  null} width={50} alt='shield'/>
                            <div style={{width: 30, height: 30, 
                                background: c.affinity === 'Magic' ? 'blue' :
                                c.affinity === 'Force' ? 'red' : 
                                c.affinity === 'Spirit' ? 'green' :
                                c.affinity === 'Void' ? 'purple' : 'black',
                                borderRadius: 20, marginLeft: 10}}></div>
                            <div style={{marginLeft: 10}}>
                                {c.faction === 'Banner Lords' ? 'BL':
                                c.faction === 'High Elves' ? 'HE':
                                c.faction === 'Sacred Order' ? 'SO':
                                c.faction === 'Barbarians' ? 'BB':
                                c.faction === 'Ogryn Tribes' ? 'OT':
                                c.faction === 'Lizardmen' ? 'LM':
                                c.faction === 'Skinwalkers' ? 'SW':
                                c.faction === 'Orcs' ? 'OR':
                                c.faction === 'Demonspawn' ? 'DS':
                                c.faction === 'Undead Hordes' ? 'UH':
                                c.faction === 'Dark Elves' ? 'DE':
                                c.faction === 'Knights Revenant' ? 'KR':
                                c.faction === 'Dwarves' ? 'DW':
                                c.faction === 'Shadowkin' ? 'SK':
                                null}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.listCardName}`} style={{color: c.rarity === 'Epic' ? '#ff00ff': 'gold'}}>{c.name}</div>
                </div>
                
                }
                
                </>
            )
        }

        const Rarity = () => {
            return(
                <div className={`${styles.filterContainer}`}>
                    <div style={{display: 'flex', width: '100vw'}}>
                        <div className='break' style={{fontSize: '2rem', color: 'gold', width: '50vw'}}>
                            <div style={{fontWeight: 'bold', marginLeft: '25%'}}>Legendaries (A-Z)</div>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                {champs.sort((a, b) => a.name.localeCompare(b.name)).filter(r => r.rarity === 'Legendary').map((c, i) => {
                                    return <ChampCard key={i} c={c} type={'l'}/>
                                })}
                            </div>
                        </div>
                        <div className='break' style={{fontSize: '2rem', color: 'purple', width: '50vw'}}>
                            <div style={{fontWeight: 'bold', marginLeft: '38%'}}>Epics (A-Z)</div>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                {champs.sort((a, b) => a.name.localeCompare(b.name)).filter(r => r.rarity === 'Epic').map((c, i) => {
                                        return <ChampCard key={i} c={c} type={'e'}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
        const Faction = () => {
            const allChamps = champs.sort((a, b) => a.name.localeCompare(b.name) && a.faction.localeCompare(b.faction))
            const [factionChamps, setFactionChamps] = useState(allChamps)
            const [selected, setSelected] = useState('all')
            
            const filterFaction = (e) => {
                const filtered = champs.filter(c => c.faction === e)
                if (e === 'all') {
                    setFactionChamps(allChamps)
                    setSelected('all')
                } else {
                    setFactionChamps(filtered)
                    setSelected(e)
                }
            }

            const FactionButtons = () => {
                const arr = ['Banner Lords', 'High Elves', 'Sacred Order', 'Barbarians', 'Ogryn Tribes', 'Lizardmen', 'Skinwalkers', 'Orcs', 'Demonspawn', 'Undead Hordes', 'Dark Elves', 'Knights Revenant', 'Dwarves', 'Shadowkin']
                const buttonArr = []
                for (let i = 0; i < arr.length; i++) {
                    buttonArr.push( <button className={`${styles.stickyButton}`} style={{background: selected === arr[i] ? '#fff' : null}} key={i} onClick={() => filterFaction(arr[i])}>{arr[i]}</button>)
                }
                return buttonArr
            }

            return(
                <div className={`${styles.filterContainer}`}>
                    <div className={`${styles.stickyButtonsDiv}`}>
                        <button className={`${styles.stickyButton}`} style={{background: selected === 'all' ? '#fff' : null}} onClick={() => filterFaction('all')}>All</button>
                        <FactionButtons />                        
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {factionChamps.map((c, i) => <ChampCard c={c} key={i} />)}
                    </div>
                </div>
            )
        }
    
        const Race = () => {
            const allChamps = champs.sort((a, b) => a.race.localeCompare(b.race) && b.rarity.localeCompare(a.rarity))
            const [raceChamps, setRaceChamps] = useState(allChamps)
            const [selected, setSelected] = useState('all')
            
            const filterRace = (e) => {
                const filtered = champs.filter(c => c.race === e)
                if (e === 'all') {
                    setRaceChamps(allChamps)
                    setSelected('all')
                } else {
                    setRaceChamps(filtered)
                    setSelected(e)
                }
            }

            const RaceButtons = () => {
                const arr = ['Telerians', 'Gaellen Pact', 'The Corrupted', 'Nyresan Union']
                const buttonArr = []
                for (let i = 0; i < arr.length; i++) {
                    buttonArr.push( <button className={`${styles.stickyButton}`} style={{background: selected === arr[i] ? '#fff' : null}} key={i} onClick={() => filterRace(arr[i])}>{arr[i]}</button>)
                }
                return buttonArr
            }

            return(
                <div className={`${styles.filterContainer}`}>
                    <div className={`${styles.stickyButtonsDiv}`}>
                        <button className={`${styles.stickyButton}`} style={{background: selected === 'all' ? '#fff' : null}} onClick={() => filterRace('all')}>All</button>
                        <RaceButtons />                        
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {raceChamps.map((c, i) => <ChampCard c={c} key={i} />)}
                    </div>
                </div>
            )
        }

        const Type = () => {
            const allChamps = champs.sort((a, b) => a.type.localeCompare(b.type))
            const [typeChamps, setTypeChamps] = useState(allChamps)
            const [selected, setSelected] = useState('all')
            
            const filterType = (e) => {
                const filtered = champs.filter(c => c.type === e)
                if (e === 'all') {
                    setTypeChamps(allChamps)
                    setSelected('all')
                } else {
                    setTypeChamps(filtered)
                    setSelected(e)
                }
            }

            const TypeButtons = () => {
                const arr = ['Attack', 'Defense', 'Support', 'HP']
                const buttonArr = []
                for (let i = 0; i < arr.length; i++) {
                    buttonArr.push( <button className={`${styles.stickyButton}`} style={{background: selected === arr[i] ? '#fff' : null}} key={i} onClick={() => filterType(arr[i])}>{arr[i]}</button>)
                }
                return buttonArr
            }

            return(
                <div className={`${styles.filterContainer}`}>
                    <div className={`${styles.stickyButtonsDiv}`}>
                        <button className={`${styles.stickyButton}`} style={{background: selected === 'all' ? '#fff' : null}} onClick={() => filterType('all')}>All</button>
                        <TypeButtons />                        
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {typeChamps.map((c, i) => <ChampCard c={c} key={i} />)}
                    </div>
                </div>
            )
        }

        const Affinity = () => {
            const allChamps = champs.sort((a, b) => a.affinity.localeCompare(b.affinity) && b.rarity.localeCompare(a.rarity))
            const [affinityChamps, setAffinityChamps] = useState(allChamps)
            const [selected, setSelected] = useState('all')
            
            const filterAffinity = (e) => {
                const filtered = champs.filter(c => c.affinity === e)
                if (e === 'all') {
                    setAffinityChamps(allChamps)
                    setSelected('all')
                } else {
                    setAffinityChamps(filtered)
                    setSelected(e)
                }
            }

            const AffinityButtons = () => {
                const arr = ['Void', 'Magic', 'Force', 'Spirit']
                const buttonArr = []
                for (let i = 0; i < arr.length; i++) {
                    buttonArr.push( <button className={`${styles.stickyButton}`} 
                    style={{
                        background: 
                            selected === arr[i] ? '#fff' : 
                            arr[i] === 'Void' ? '#b042ff' : 
                            arr[i] === 'Magic' ? '#1aa7ec' :
                            arr[i] === 'Force' ? 'red' :
                            arr[i] === 'Spirit' ? 'limegreen' :
                            null
                    }} 
                    key={i} onClick={() => filterAffinity(arr[i])}>{arr[i]}</button>)
                }
                return buttonArr
            }

            return(
                <div className={`${styles.filterContainer}`}>
                    <div className={`${styles.stickyButtonsDiv}`}>
                        <button className={`${styles.stickyButton}`} style={{background: selected === 'all' ? '#fff' : null}} onClick={() => filterAffinity('all')}>All</button>
                        <AffinityButtons />                        
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {affinityChamps.map((c, i) => <ChampCard c={c} key={i} />)}
                    </div>
                </div>
            )
        }

        return(
            <div style={{width: '95vw', height: '100vh', textAlign: 'left'}}>
                <div style={{marginTop: 20}}>
                    <span style={{marginbottom: 5}}>Filter By: </span>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Rarity'})} 
                        style={{borderRadius: '15px 0 0 15px', background: filteredValue === 'Rarity' ? 'white' : null}}>
                            Rarity
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Race'})}
                        style={{background: filteredValue === 'Race' ? 'white' : null}}>
                            Race
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Faction'})}
                        style={{background: filteredValue === 'Faction' ? 'white' : null}}>
                            Faction
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Type'})}
                        style={{background: filteredValue === 'Type' ? 'white' : null}}>
                            Type
                    </button>
                    <button 
                        className={`${styles.filterBtn}`} 
                        onClick={() => this.setState({filteredValue: 'Affinity'})}
                        style={{background: filteredValue === 'Affinity' ? 'white' : null, borderRadius: '0 15px 15px 0'}}>
                            Affinity
                    </button>
                </div>
                <div>
                    <span>View By:</span>
                    <button className={`${styles.filterBtn}`} style={{marginLeft: 10, marginTop: 10, borderRadius: '15px 0 0 15px', background: list ? 'white' : null}}  onClick={() => this.setState({list: true})}>List</button>
                    <button className={`${styles.filterBtn}`} style={{borderRadius: '0 15px 15px 0', background: !list ? 'white' : null}}  onClick={() => this.setState({list: false})}>Full</button>
                </div>
                <div style={{marginTop: 20}}>
                    {filteredValue === 'Rarity' ? <Rarity /> : null}
                    {filteredValue === 'Race' ? <Race /> : null}
                    {filteredValue === 'Faction' ? <Faction /> : null}
                    {filteredValue === 'Type' ? <Type /> : null}
                    {filteredValue === 'Affinity' ? <Affinity /> : null}
                </div>
                
            </div>
        )
    }
}