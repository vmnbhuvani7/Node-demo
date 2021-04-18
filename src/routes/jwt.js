const express = require('express');
const router = express.Router();
const { loginController } = require('../controllers')
const verifyToken = require('../middlewares')

router.post("/login", loginController.login)
    .post('/post', verifyToken.verifyToken, loginController.post)

module.exports = router