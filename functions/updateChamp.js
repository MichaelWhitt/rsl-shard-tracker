require('dotenv').config()
const {UPDATE_CHAMP} = require("./utils/champQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {
    // to update, pass in _id and the rest of the new data in an obj
    // "_id": 329470864387997760, "name": "Cillian", "rarity": "Legendary", "affinity": "Magic", "type": "Attack", "faction": "Banner Lords", "race": "Telerians", "owned": false, "rating": 0, "pulled": 0
    if (event.httpMethod !== 'PUT') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {_id:id, name, rarity, affinity, type, faction, race, owned, rating, pullCount, image} = JSON.parse(event.body)
    const variables = {id, name, rarity, affinity, type, faction, race, owned, rating, pullCount, image}
    try {
        const {updateChamp} = await sendQuery(UPDATE_CHAMP, variables)
        return formattedResponse(200, updateChamp)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with updateChamp"})
    }
}



