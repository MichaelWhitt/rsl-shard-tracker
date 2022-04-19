require('dotenv').config()
const {CREATE_CHAMP} = require("./utils/champQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {
    
    //console.log('THIS IS THE EVENT:', event)
    // THIS WORKS IN FAUNA const res = await sendQuery(CREATE_CHAMP, {name: 'card', rarity: 'lego', affinity: 'magic', type: 'hp', faction: 'thing', race: 'otherTHing'})
    // console.log('res', res) res returns the createChamp object with everything we passed in


    const {name, rarity, affinity, type, faction, race, owned, rating, pullCount} = JSON.parse(event.body)
    const variables = {name, rarity, affinity, type, faction, race, owned, rating, pullCount}
    try {
        const {createChamp} = await sendQuery(CREATE_CHAMP, variables)
        return formattedResponse(200, createChamp)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with createChamp"})
    }
}



