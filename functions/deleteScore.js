require('dotenv').config()
const {DELETE_SCORE} = require("./utils/scoreQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {

    // to delete, pass in id:
    // "id": "329471079379632194"
    if (event.httpMethod !== 'DELETE') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {id} = JSON.parse(event.body)
    const variables = {id}
    try {
        const {deleteScore} = await sendQuery(DELETE_SCORE, variables)
        return formattedResponse(200, {id: deleteScore})
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with deleteScore"})
    }
}



