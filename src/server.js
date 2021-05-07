const express = require('express')
const server = express()
const routes = require('./routes')
const dotenv = require('dotenv')
dotenv.config()

////const authMiddleware = require('./authentication/authMiddleware')

server.use(express.json())
//// server.use(authMiddleware) 
server.use(routes)

server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.info(`Server is running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})
