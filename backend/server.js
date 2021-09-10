const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const AuthRoute = require('./routes/auth')
const User   = require('./models/User')

const app = express();
dotenv.config()

const DBlink = 'mongodb+srv://Meck:1234@petconnect.b5e1v.mongodb.net/myDB1?retryWrites=true&w=majority';
mongoose.connect(DBlink, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
      app.get("/api", (req, res) => {
       res.json({ message: "Hello from server!" });
        })
      app.listen(process.env.PORT || 8080);
    })
    .catch((err) => console.log(err));
    

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


app.get('/home', (req, res) => {
    const startpg = [
      {title: 'PetConnect'},
    ];
    res.render('index2', { title: 'Home page', startpg});
  });
  
app.get('/reg', (req, res) => {
    const user = new User({
      name : 'Mariam Meckawy',
      email : 'Mariam@yahoo.com',
      phone : '11227788',
      password: 'test7899',
      address : 'test address',
      pet_type : 'dog',
      pet_age : '7'
    }) 
    user.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
}); 

app.use('/app',AuthRoute)