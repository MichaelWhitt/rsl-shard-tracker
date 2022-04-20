require('dotenv').config()
const {CREATE_CHAMP} = require("./utils/champQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {

    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    // to create champ, pass in object with:
    // "name": "Cillian", "rarity": "Legendary", "affinity": "Magic", "type": "Attack", "faction": "Banner Lords", "race": "Telerians", "owned": false, "rating": 0, "pulled": 0

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



