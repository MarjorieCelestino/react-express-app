var express = require('express');
var router = express.Router();
var db = require('./../models/user.js');


//GET all users
router.get('/', function(req, res) {
  console.log("aqui");
  db.findAll({
  attributes: ['id', 'name', 'email', 'date_added']
  })
    .then(function (users) {
      console.log(users);
      res.json(users);
    });
});

//CREATE new user
router.post('/new', function (req, res) {
  db.create({ 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    date_added: req.body.date_added
  })
    .then(function (user) {
      res.json(user);
    });
});

module.exports = router;


