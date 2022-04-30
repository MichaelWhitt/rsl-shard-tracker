require('dotenv').config()
const {GET_SCORES} = require("./utils/scoreQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {

    if (event.httpMethod !== 'GET') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    // to get scores, simply do a GET http request to /api/getScores

    try {
        const res = await sendQuery(GET_SCORES)
        const data = res.allScores.data
        return formattedResponse(200, data)
    } catch (err){
        console.log(err)
        return formattedResponse(500, {err: "Something went wrong with getScores"})
    }
}