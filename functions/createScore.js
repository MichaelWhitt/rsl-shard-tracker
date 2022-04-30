require('dotenv').config()
const {CREATE_SCORE} = require("./utils/scoreQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')


exports.handler = async (event) => {

    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    // to create score, pass in object with:
    // "user": "UserName", "score": "1550", "time": "1600", "email": "user@email.com"

    const {user, score, time, email} = JSON.parse(event.body)
    const variables = {user, score, time, email}
    
    try {
        const {createScore} = await sendQuery(CREATE_SCORE, variables)
        return formattedResponse(200, createScore)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with createScore"})
    }
}