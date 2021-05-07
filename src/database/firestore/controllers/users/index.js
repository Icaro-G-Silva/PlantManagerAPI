const firebase = require('../../../../firebase')
const firestore = firebase.firestore()
const users = firestore.collection('users')

const {createUserId} = require('../../../../utils/hashes')
const {success, error} = require('../../../../utils/returnMessages')

const create = async (req, res) => {
    const {name} = req.body
    const id = await createUserId()
    await users.doc(id).set({
        id,
        name
    }).then(()=>res.json(success()).status(200))
    .catch(err=>res.json(error(err)).status(400))
}

const readSpecific = async (req, res) => {
    const {id} = req.params
    await users.doc(id).get().then(userData => {
        res.json(userData.data()).status(200)
    }).catch(err=>res.json(error(err)).status(400))
}

const update = async(req, res) => {
    const {id} = req.params
    const {name} = req.body
    await users.doc(id).update({
        name
    }).then(()=>res.json(success()).status(200))
    .catch(err=>res.json(error(err)).status(400))
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    await users.doc(id).delete().then(()=>res.json(success()).status(200))
    .catch(err=>res.json(error(err)).status(400))
}

module.exports = {create, readSpecific, update, deleteUser}