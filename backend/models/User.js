const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:      {type: String, required: true},
    email:     {type: String, required: true, unique: true},
    phone:     {type: String, required: true},
    password:  {type: String, required: true},
    address:   {type: String},
    pet_type:  {type: String},
    pet_age:   {type: Number},
    date:      {type: Date, default: Date.now}
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model('User', userSchema);