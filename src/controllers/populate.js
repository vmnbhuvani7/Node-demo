const { Populate } = require('../models')

const owner = async (req, res) => {
    const newOwner = await Populate.Owner.create(req.body)
    res.json(newOwner)
}

const dog = async (req, res) => {
    const newDog = await Populate.Dog.create(req.body)
    res.json(newDog)
}

const see = async (req, res) => {
    const data = await Populate.Dog.find({}).populate({
        path: "owner",
        match: { name: "a" },
        select: 'name -_id'
    })
    res.json(data)
}

module.exports = {
    owner,
    dog,
    see
}
