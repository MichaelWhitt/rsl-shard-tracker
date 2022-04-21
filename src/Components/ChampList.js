import React from "react"

export default class ChampList extends React.Component {

    state = {
        champArr: []
    }

    componentDidMount(){
        this.buildArr()
    }

    buildArr = () => {
        const {champs} = this.props
        const arr = champs.map( c => c.name)
        this.setState({champArr: arr})
    }

    


render(){
    const {champs} = this.props
    
    // const aChamps = []
    // const sortedChamps = legendary.sort((a, b) => {
    // if (a.name.startsWith('A')) aChamps.push(a)
    //  return a.name.localeCompare(b)
    // })
    // console.log(aChamps)
    

    return(
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            
            <div style={{fontSize: '3.5rem', textAlign: 'left'}}>
                <div style={{color: 'gold'}}>Legendaries</div>
                {champs ? champs.map( c => c.rarity === "Legendary" ? <div key={c.id} style={{fontSize: 30, textAlign: 'left'}}>{c.name}</div> : null) : null}
            </div>
            

            <div style={{fontSize: '3.5rem', textAlign: 'left'}}>
                <div style={{color: '#ff00ff'}}>Epics</div>
                {champs ? champs.map( c => c.rarity === "Epic" ? <div key={c.id} style={{fontSize: 30, textAlign: 'left'}}>{c.name}</div> : null) : null}
            </div>
            <div>{this.state.champArr[2]}</div>
        </div>
    )
}
}