import React from "react"

export default class ChampList extends React.Component {
render(){

    const {telerians, gaellenPact, theCorrupted, nyresanUnion} = this.props.data
    console.log('tel',telerians[1].subFactions[0].bannerLords.legendary[2].name)
    return(
        <div></div>
    )
}
}