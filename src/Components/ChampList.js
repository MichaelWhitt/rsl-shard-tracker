import React from "react"

export default class ChampList extends React.Component {
render(){
    const {champs} = this.props
    const {common, uncommon, rare, epic, legendary} = champs

    return(
        <div>{legendary.map((c, i) => <div key={i}>{c.name}</div>)}</div>
    )
}
}