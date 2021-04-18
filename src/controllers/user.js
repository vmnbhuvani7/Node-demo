const User = require('../models');

const allTask = async (req, res) => {
    try {
        const get_all_task = await User.find()
        res.json(get_all_task)
    }
    catch (err) {
        res.send('Error in Get All Task' + err)
    }
};

const getTask = async (req, res) => {
    try {
        const get_task = await User.findById(req.params.id)
        res.json(get_task)
    }
    catch (err) {
        res.send('Error in Get Task' + err)
    }
}

const addTask = async (req, res) => {
    try {
        const insert_task = await User.create(req.body);
        res.json(insert_task);
    }
    catch (err) {
        res.send('Error in Add Task' + err)
    }
}

const updateTask = async (req, res) => {
    try {
        const update_task = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // const update_task = await User.findOneAndUpdate(req.params.id, req.body, { upsert: true })
        // const update_task = await Model.updateOne({ _id: req.params.id }, { $set: req.body })
        // findOneAndUpdate
        res.json(update_task)
    }
    catch (err) {
        res.send('Error In Put Task' + err)
    }
}

const deleteTask = async (req, res) => {
    try {
        const delete_task = await User.findByIdAndDelete(req.params.id)
        res.json(delete_task)
    }
    catch (err) {
        res.send('Error In Delete Task' + err)
    }
}

const deleteAll = async (req, res) => {
    try {
        const delete_all_task = await User.deleteMany();
        res.json(delete_all_task);
    } catch (err) {
        res.send('Error in Delete All Task' + err)
    }
}

module.exports = { allTask, getTask, addTask, updateTask, deleteTask, deleteAll }