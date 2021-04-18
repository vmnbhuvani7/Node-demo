const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: String,
    owner: String,
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const ownerSchema = new mongoose.Schema({
    name: String,
})

dogSchema.virtual('members', {
    ref: 'Owner',
    localField: 'owner',
    foreignField: '_id',
    justOne: false,
});

const Dog = mongoose.model('Dog', dogSchema)
const Owner = mongoose.model('Owner', ownerSchema)


Dog.find({}).populate({ path: 'members' }).exec(function (error, bands) {
    console.log("bands", bands[0]);
});