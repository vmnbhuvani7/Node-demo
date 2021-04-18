const express = require('express');
const router = express.Router();

const { userController } = require('../controllers')

router.get('/getAllTask', userController.allTask)
    .get('/getTask/:id', userController.getTask)

router.post('/addTask', userController.addTask);

router.put('/updateTask/:id', userController.updateTask)

router.delete('/deleteTask/:id', userController.deleteTask)
    .delete('/deleteAllTask', userController.deleteAll)

module.exports = router