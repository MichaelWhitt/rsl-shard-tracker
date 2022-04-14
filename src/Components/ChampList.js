import React from "react"

export default class ChampList extends React.Component {
render(){
    const {data} = this.props
    const telChamps = data.map( t => t.telerians)
    const gaeChamps = data.map( t => t.gaellenPact)
    const corruptChamps = data.map( t => t.theCorrupted)
    const nyrChamps = data.map( t => t.nyresanUnion)

    //Telerians
    const bannerLords = telChamps[0][1].subFactions[0].bannerLords
    const highElves = telChamps[0][1].subFactions[1].highElves
    const sacredOrder = telChamps[0][1].subFactions[2].sacredOrder
    const barbarians = telChamps[0][1].subFactions[3].barbarians

    //Gaellen Pact
    const ogrynTribes = gaeChamps[0][1].subFactions[0].ogrynTribes
    const lizardmen = gaeChamps[0][1].subFactions[1].lizardmen
    const skinwalkers = gaeChamps[0][1].subFactions[2].skinwalkers
    const orcs = gaeChamps[0][1].subFactions[3].orcs

    // //The Corrupted
    const demonSpawn = corruptChamps[0][1].subFactions[0].demonSpawn
    const undeadHordes = corruptChamps[0][1].subFactions[1].undeadHordes
    const darkElves = corruptChamps[0][1].subFactions[2].darkElves
    const knightsRevenant = corruptChamps[0][1].subFactions[3].knightsRevenant

    // //Nyresan Union
    const dwarves = nyrChamps[0][1].subFactions[0].dwarves
    const shadowkin = nyrChamps[0][1].subFactions[1].shadowkin
    const newFaction = nyrChamps[0][1].subFactions[2].newFaction
    const newFaction2 = nyrChamps[0][1].subFactions[3].newFaction

    return(
        <div>{highElves.legendary.map(a => <div>{a.name}</div>)}</div>
    )
}
}