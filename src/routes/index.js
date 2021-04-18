const express = require('express')
const router = express.Router();

const userRoutes = require('./user')
const jwtRouter = require('./jwt')
const populateRouter = require('./populate')

router.use('/user', userRoutes);
router.use('/token', jwtRouter)
router.use('/populate', populateRouter)

module.exports = router