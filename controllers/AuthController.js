const User = require("../models/User");

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }
  
  module.exports.signup_get = (req, res) => {
    res.send('signup');
  }
  
  module.exports.login_get = (req, res) => {
    res.send('login');
  }
  
  module.exports.signup_post = async (req, res) => {
    const { name, email, phone,  password, address, pet_type, pet_age } = req.body;
  
    try {
      const user = await User.create({ name, email, phone,  password, address, pet_type, pet_age });
      res.status(201).json(user);
    }
    catch(err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
   
  }
  
  module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
  
    console.log(email, password);
    res.send('user login');
  }