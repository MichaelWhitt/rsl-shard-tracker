require('dotenv').config()
const {UPDATE_SCORE} = require("./utils/scoreQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {
    // to update, pass in _id and the rest of the new data in an obj
    // "_id": "329470864387997760", "user": "Flux", "score": "200", "time": "500", "email": "x@email.com"
    if (event.httpMethod !== 'PUT') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {_id:id, user, score, time, email} = JSON.parse(event.body)
    const variables = {id, user, score, time, email}
    try {
        const {updateScore} = await sendQuery(UPDATE_SCORE, variables)
        return formattedResponse(200, updateScore)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with updateScore"})
    }
}



