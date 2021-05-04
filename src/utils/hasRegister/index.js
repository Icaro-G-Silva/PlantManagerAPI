const firebase = require('../../firebase')
const firestore = firebase.firestore()

const hasUser = async (id) => {
    const users = firestore.collection('users')
    const response = await users.where('id', '==', id).get()
    return (response.empty) ? false : true
}

module.exports = {hasUser}