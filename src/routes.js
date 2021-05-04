const { Router } = require('express')
const router = Router()

const userController = require('./database/firestore/controllers/users')

router.get('/', (req, res) => {
    res.json({server: "Online"}).status(200)
})

router.post('/user', userController.create)

module.exports = router