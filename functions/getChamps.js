require('dotenv').config()
const {GET_CHAMPS} = require("./utils/champQueries")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require('./utils/formattedResponse')

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_CHAMPS)
        const data = res.allChamps.data
        return formattedResponse(200, data)
    } catch (err){
        console.log(err)
        return formattedResponse(500, {err: "Something went wrong with getChamps"})
    }
}