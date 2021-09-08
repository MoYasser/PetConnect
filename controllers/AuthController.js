const User   = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err){
            res.json({
                error: err
            })
        }
    })
    let user = new User({
        name : req.body.name,
        email : req.bcrypt.email,
        number : req.body.number,
        // eslint-disable-next-line no-undef
        password : req.body.password,
        address : req.body.address,
        pet_type : req.body.pet_type,
        pet_age : req.body.pet_age
    })
    user.save()
    .then(user => {
        res.json({
           message: 'User added successfully'
        })
    })
    .catch (error =>{
        res.json({
         message: 'An error occured!'   
        })
    })
}

const login  = (req, res) =>{
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email: username}, {phone: username}]})
    .then (user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login successful',
                        token: token
                    })
                }else{
                    res.json({
                        message: 'Password is incorrect'
                    })
                }
            })
        }
    })
}

module.exports = {
    register, login
}