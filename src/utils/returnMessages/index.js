const error = (err) => JSON.parse(`{"error": "${err}"}`)

const success = (msg = 'Success!') => JSON.parse(`{"message": "${msg}"}`)

module.exports = {error, success}
