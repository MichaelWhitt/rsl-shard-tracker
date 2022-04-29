import React from 'react'
import styles from './styles.module.css'
import defenseIcon from '../../../src/icons/shield.png'
import attackIcon from '../../../src/icons/sword.png'
import hpIcon from '../../../src/icons/hp.png'
import supportIcon from '../../../src/icons/support.png'

export default class GameChampCard extends React.Component {

    state={
        won: false,
        correct: false,
        fakeChampions: [],
        allChampions: [],
        chosenChamp: {},
        display: false,
        score: 0
    }

    componentDidMount(){
        if (this.state.allChampions.length === 0) this.getChamps()
    }

    componentDidUpdate(){
        if (this.state.won === true) {
            this.getChamps()
            this.setState({won: false})
        }
    }
    
    getChamps = () => {
        const {random, totalChamps} = this.props
        const fakeChamps = []
        const allChamps = []

        for (let i = 0; i < 4; i++) {
            allChamps.push(totalChamps[random()])
        }

        for (let i = 0; i < 3; i++) {
            fakeChamps.push(allChamps[i])
        }

        const shuffle = (array) => {
            let unshuffled = array

            let shuffled = unshuffled
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)

                this.setState({allChampions: shuffled})
        }
        shuffle(allChamps)
        this.setState({fakeChampions: fakeChamps})
        this.setState({chosenChamp: allChamps[3]})
    }

    render(){
        const {chosenChamp} = this.state
        
        const Questions = () => {

            const handleClick = (e) => {
                if(e.target.innerText === this.state.chosenChamp.name) {
                    this.setState({display: true, score: this.state.score + 1})
                }
            }
            

            return(
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    {this.state.allChampions.map((c, i) => {
                        return (
                            <div key={i} style={{width: '400px'}}>
                                <button className={`${styles.questionButton}`} onClick={(e) => handleClick(e)}>{c.name}</button>
                            </div>
                        )
                    }
                    )}
                </div>
            )
        }

        return (
            <div>{<div style={{paddingTop: 15}}>
                {this.state.display ? 'Correct!' : 'Guess the Champ!'}
                <div>Score: {this.state.score ? this.state.score : 0}</div>
                </div>}
                <div style={{display: 'flex', paddingTop: 75}}>
                    <div style={{paddingTop: 20, width: '50%'}}>
                        <img src={chosenChamp.image} alt='' style={{borderRadius: 15, boxShadow: '0 0 15px #9fe2bf'}} />
                        <Questions />
                    </div>
                    <div style={{paddingTop: 20, width: '50%'}}>
                    {this.state.display ? 
                        <div style={{textAlign: 'left'}}>
                            <img src={chosenChamp.image} alt='' style={{borderRadius: 15, border: chosenChamp.rarity === 'Legendary' ? '2px dashed gold' : '2px dashed #ff00ff'}} />
                            <span style={{fontSize: 45, marginLeft: 40}}>{chosenChamp.name}</span>
                            <div >
                                <hr />
                                <div>Rarity: <span style={{color: chosenChamp.rarity === 'Legendary' ? 'gold' : '#ff00ff'}}>{chosenChamp.rarity}</span></div>
                                <div>Affinity: 
                                    <span style={{color: 
                                        chosenChamp.affinity === 'Void' ? '#ff00ff' :
                                        chosenChamp.affinity === 'Force' ? 'red' :
                                        chosenChamp.affinity === 'Magic' ? 'cyan' :
                                        chosenChamp.affinity === 'Spirit' ? 'limegreen' : null
                                    }}> {chosenChamp.affinity}</span>
                                </div>
                                <div>Type: {chosenChamp.type}
                                <img 
                                src={chosenChamp.type === 'Support' ? supportIcon:
                                chosenChamp.type === 'Attack' ? attackIcon:
                                chosenChamp.type === 'HP' ? hpIcon:
                                chosenChamp.type === 'Defense' ? defenseIcon: null
                            } 
                                style={{filter: 'invert(100%)', position: 'relative', top: 5, left: 5}} width={30} alt=''/>
                                </div>
                                <div>Race: {chosenChamp.race}</div>
                                <div>Faction: {chosenChamp.faction}</div>
                                <button className={`${styles.next}`} onClick={() => this.setState({won: true, display: false})}>Next Champion</button>
                            </div>
                        </div> 
                        : null
                     }
                    </div>
                    
                </div>
            </div>
            )
        }
}