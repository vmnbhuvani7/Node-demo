const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {
        const user = {
            id: 1,
            email: "test@gmail.com",
            password: "test@123"
        }
        jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '30s' }, (err, token) => {
            res.send({ token, user })
        })

    }
    catch (err) {
        res.send('Error in Login' + err)
    }
}

const post = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: "success",
                authData
            })
        }
    })
}

module.exports = { login, post }