const firebase = require('../../firebase')

const authMiddleware = (request, response, next) => {
    const headerToken = request.headers.authorization;
    if (!headerToken) {
        return response.json({ error: "No token provided" }).status(401);
    }

    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        response.json({ error: "Invalid token" }).status(401);
    }

    const token = headerToken.split(" ")[1];
    firebase
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => response.json({ error: "Could not authorize" }).status(403));
}
  
module.exports = authMiddleware;