const { Router } = require('express')
const router = Router()

const userController = require('./database/firestore/controllers/users')
const plantsController = require('./database/firestore/controllers/plants')

router.get('/', (req, res) => {
    res.json({server: "Online"}).status(200)
})

router.get('/user/:id', userController.readSpecific)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.deleteUser)

router.get('/plants', plantsController.readAll)
router.get('/plant/:id', plantsController.readSpecific)
router.post('/plant', plantsController.create)
router.put('/plant/:id', plantsController.update)
router.delete('/plant/:id', plantsController.deletePlant)

module.exports = router