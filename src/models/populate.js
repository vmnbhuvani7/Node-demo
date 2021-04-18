const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
    name: String,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Owner"
    }
})

const ownerSchema = mongoose.Schema({
    name: String,
})

const Owner = mongoose.model('Owner', ownerSchema)
const Dog = mongoose.model('Dog', dogSchema)

module.exports = {
    Owner,
    Dog
}

