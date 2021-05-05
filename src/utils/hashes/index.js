const {hasUser, hasPlant} = require('../hasRegister')
const crypto = require('crypto')

const createUserId = async() => {
    var exist = true
    do {
        var id = crypto.randomBytes(12).toString('hex').slice(0, 12)
        if(!await hasUser(id)) exist = false
    } while(exist)
    return id
}

const createPlantId = async() => {
    var exist = true
    do {
        var id = crypto.randomBytes(12).toString('hex').slice(0, 12)
        if(!await hasPlant(id)) exist = false
    } while(exist)
    return id
}

module.exports = {createUserId, createPlantId}