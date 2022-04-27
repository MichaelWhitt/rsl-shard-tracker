import React from 'react'
import styles from './styles.module.css'
import imageBack from '../../icons/22600.png'

export default class GameChampCard extends React.Component {

    // flipped state also counts as turned and tells parent component
    // if 2 are turned and not matching, flip back to original

    state={
        selected: false,
        correct: false,
        count: 0
    }

    count = (e) => {
        if(this.state.count === 0){
            this.props.changeCount(+1)
            this.setState({count: 1})
            this.props.getChampName(this.props.champion.name)
        }

        if (this.state.count === 1) {
            this.props.changeCount(-1)
            this.setState({count: 0})
        }


    }

    select = (e) => {
        this.setState({selected: !this.state.selected})
    }

    render(){
        const {champion, winner} = this.props
        const {selected} = this.state

        return(
            <div style={{marginTop: 25}}>
                
                {winner.current ? <img src={champion.image} /> : <img onClick={(e) => {
                    this.select(e)
                    this.count(e)
                    }} src={selected ? champion.image : imageBack} alt={selected ? champion.name : ''} className={`${styles.gameChampCard}`} 
                /> }
            </div>
        )
    }
}