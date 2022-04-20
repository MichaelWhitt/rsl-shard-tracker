require('dotenv').config()
const {GET_CHAMPS} = require("./utils/champQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {

    if (event.httpMethod !== 'GET') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    // to get champs, simply do a GET http request to /api/getChamps

    try {
        const res = await sendQuery(GET_CHAMPS)
        const data = res.allChamps.data
        return formattedResponse(200, data)
    } catch (err){
        console.log(err)
        return formattedResponse(500, {err: "Something went wrong with getChamps"})
    }
}