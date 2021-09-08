const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:      {type: String},
    email:     {type: String},
    phone:     {type: String},
    password:  {type: String},
    address:   {type: String},
    pet_type:  {type: String},
    pet_age:   {type: Number}
})

module.exports = mongoose.model('User', userSchema)