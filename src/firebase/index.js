const firebase = require('firebase-admin')
const dotenv = require('dotenv')
dotenv.config()

const serviceAccount = require(process.env.PROJECT_SECRETS_PATH)

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
})

module.exports = firebase
