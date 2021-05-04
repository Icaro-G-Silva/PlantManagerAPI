const firebase = require('../../../../firebase')
const firestore = firebase.firestore()
const users = firestore.collection('users')

const {createUserId} = require('../../../../utils/hashes')

const create = async (req, res) => {
    const {firstName, lastName} = req.body
    const id = await createUserId()

    await users.doc(id).set({
        id,
        firstName,
        lastName
    }).then(() => {
        res.json({ message: "Registered Succesfully" }).status(200)
    }).catch(err => {
        res.json({ error: err }).status(400)
    })
}

module.exports = {create}