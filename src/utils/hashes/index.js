const {hasUser} = require('../hasRegister')
const crypto = require('crypto')

async function createUserId() {
    var exist = true
    do {
        var id = crypto.randomBytes(12).toString('hex').slice(0, 12)
        if(!await hasUser(id)) exist = false
    } while(exist)
    return id
}

module.exports = {createUserId}