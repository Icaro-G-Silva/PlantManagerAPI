class ErrorMessages {
    error = (err) => JSON.parse(`{"error": "${err}"}`)
}

class SuccessMessages {
    success = (msg = 'Success!') => JSON.parse(`{"message": "${msg}"}`)
}

module.exports = {ErrorMessages, SuccessMessages}
