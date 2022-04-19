import React from "react"

export default class ChampList extends React.Component {
render(){
    const {champs} = this.props
    const {common, uncommon, rare, epic, legendary} = champs

    // const aChamps = []
    // const sortedChamps = legendary.sort((a, b) => {
    // if (a.name.startsWith('A')) aChamps.push(a)
    //  return a.name.localeCompare(b)
    // })
    // console.log(aChamps)
    

    return(
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: '3.5rem', color: 'gold'}}>Legendaries</div>
            {legendary.map((c, i) => <div key={i} style={{textAlign: 'left'}}>{i+1}: {c.name}</div>)}
            <div style={{fontSize: '3.5rem', color: '#ff00ff'}}>Epics</div>
            {epic.map((c, i) => <div key={i} style={{textAlign: 'left'}}>{i+1}: {c.name}</div>)}
        </div>
    )
}
}