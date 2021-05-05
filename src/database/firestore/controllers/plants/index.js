const firebase = require('../../../../firebase')
const firestore = firebase.firestore()
const plants = firestore.collection('plants')

const {createPlantId} = require('../../../../utils/hashes')
const {SuccessMessages, ErrorMessages} = require('../../../../utils/returnMessages')
const success = new SuccessMessages
const error = new ErrorMessages

const create = async (req, res) => {
    const {name, about, water_tips, photo, environments, frequency} = req.body
    const id = await createPlantId()
    await plants.doc(id).set({
        id,
        name,
        about,
        water_tips,
        photo,
        environments,
        frequency
    }).then(()=>res.json(success.success()).status(200))
    .catch(err=>res.json(error.error(err)).status(400))
}

const readAll = async (req, res) => {
    await plants.get().then(plantsData => {
        const data = []
        plantsData.forEach(plant => data.push(plant.data()))
        res.json(data).status(200)
    }).catch(err=>res.json(error.error(err)).status(400))
}

const readSpecific = async (req, res) => {
    const {id} = req.params
    await plants.doc(id).get().then(plantData => {
        res.json(plantData.data()).status(200)
    }).catch(err=>res.json(error.error(err)).status(400))
}

const update = async (req, res) => {
    const {id} = req.params
    const {name, about, water_tips, photo, environments, frequency} = req.body
    await plants.doc(id).update({
        name,
        about,
        water_tips,
        photo,
        environments,
        frequency
    }).then(()=>res.json(success.success()).status(200))
    .catch(err=>res.json(error.error(err)).status(400))
}

const deletePlant = async (req, res) => {
    const {id} = req.params
    await plants.doc(id).delete().then(()=>res.json(success.success()).status(200))
    .catch(err=>res.json(error.error(err)).status(400))
}

module.exports = {create, readAll, readSpecific, update, deletePlant}