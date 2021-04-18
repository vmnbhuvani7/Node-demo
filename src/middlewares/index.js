const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== "undefined") {
        // const bearer = bearerHeader.split(' ');
        // const bearerToken = bearer[1]
        req.token = bearerHeader;
        next()
    }
    else {
        res.sendStatus(403)
    }
}

module.exports = { myLogger, verifyToken };