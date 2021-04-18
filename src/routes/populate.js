const express = require("express");
const router = express.Router();
const { populateController } = require('../controllers')

router.post('/owner', populateController.owner)

router.post('/dog', populateController.dog)

router.get('/see', populateController.see)

module.exports = router
