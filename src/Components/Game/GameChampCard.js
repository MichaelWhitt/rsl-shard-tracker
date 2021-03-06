import React from 'react'
import styles from './styles.module.css'
import axios from 'axios'

const Questions = ({handleScoreState, allChampions}) => {
    
    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            {allChampions.map((c, i) => {
                return (
                    <div key={i} style={{width: '400px'}}>
                        <button className={`${styles.questionButton}`} onClick={(e) => handleScoreState(e)}>{c?.name}</button>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default class GameChampCard extends React.Component {
    // bug-> rendering twice. I think it's the shuffled setState function rendering the champ cards twice on update.

    state={
        won: false,
        fakeChampions: [], // 3 out of 4 of the chosen champs for the question
        allChampions: [], // all 4 champs for the question
        chosenChamp: {}, //obj of the chosen champ for the question
        display: false,
        score: 0,
        time: 30,
        scoreScreen: false,
        name: '',
        email: '',
        waiting: false
    }

    handleScoreState = (e) => {
        if(e.target.innerText === this.state.chosenChamp.name) {
            this.setState({score: this.state.score + 1, won: true})
        } else if (e.target.innerText !== this.state.chosenChamp.name) {
            this.setState({score: this.state.score -1, won: true})
        }
    }

    componentDidMount(){
        if (this.state.allChampions.length === 0) this.getChamps()
        setTimeout(() => {this.setState({scoreScreen: true, display: false})}, 30000)
    }

    componentDidUpdate(){
        if (this.state.won === true){
            this.getChamps()
            this.setState({won: false})
        }
    }

    shouldComponentUpdate = (_, nState) => {
        if (this.state !== nState) return true
        return false
      }

    sendRecord = () => {
        const {score, time, name, email} = this.state

        if(score > 0 ){
            if (name !== '' && name.length < 18) {
                this.setState({waiting: true})
                setTimeout(() => {
                    axios.post('/api/createScore', {user: name, score: score + '', time: time + '', email: email})
                    .then((res) => console.log(res)).catch((err) => console.log(err))
                    this.props.togglePlaying()
                }, 2500)
               
            } else {
                alert("Name can't be empty, and must be 18 or fewer characters.")
            }
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
        this.setState({fakeChampions: fakeChamps, chosenChamp: allChamps[3]})
    }

    render(){
        const {chosenChamp, allChampions} = this.state
        return (
                <div>
                    {this.state.scoreScreen ?
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 80}}>
                        <div style={{background: '#9fe2ba', height: '50vh', width: '500px', borderRadius: 15, color: '#000'}}>
                            <div style={{fontWeight: 700, paddingTop: 25}}>Congrats!</div>
                            <div style={{margin: '0 auto'}}>
                                <div style={{margin: 40}}>Score: {this.state.score}</div>
                                <div style={{fontWeight: 700, marginBottom: 10}}>Add Score To Leaderboards:</div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <input 
                                        type="text" 
                                        style={{height:50, width: 300, fontSize: 30, borderRadius: 10}} 
                                        onChange={(e) => this.setState({name: e.target.value}) } 
                                        placeholder="Enter Name" 
                                    />
                                    {false && <input 
                                        type="text" 
                                        style={{height:50, width: 300, fontSize: 30, marginTop: 5, borderRadius: 10}} 
                                        onChange={(e) => this.setState({email: e.target.value}) } 
                                        placeholder="Email (Optional)" 
                                    />}
                                </div>
                            </div>
                            {this.state.waiting ? <div style={{marginTop: 10}}>Record Saved!</div> : <button className={`${styles.next}`} style={{background: '#fff'}} onClick={() => this.sendRecord()}>Send</button>
                            }
                            <div style={{fontSize: 15, fontWeight: 700}}>{this.state.score < 0 ? "[Negative scores not tracked]" : null}</div>
                        </div>
                        <button className={`${styles.next}`} style={{height: 100, width: 100, borderRadius: 50, marginLeft:20, background: '#fff'}}onClick={() => this.props.togglePlaying()}>Retry</button>
                    </div>
                     : 
                     <div style={{paddingTop: 30, width: '100%', textAlign: 'center'}}>
                         <div style={{marginBottom: 55, display: 'flex', justifyContent: 'space-around', height: 40}}>
                            <span>Score: {this.state.score || 0}</span>
                        </div>
                        <img src={chosenChamp.image} alt='' style={{borderRadius: 15, boxShadow: '0 0 15px #9fe2bf'}} />
                        <Questions handleScoreState={this.handleScoreState} allChampions={allChampions}/>
                    </div> }
            </div>
            )
        }
}