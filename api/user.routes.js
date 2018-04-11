var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');

const User = require('../model/user.model');

// Alle users ophalen
routes.get('/users', function(req, res)
{
    console.log("users check");
    User.find({})
        .then((users) => res.status(200).send(users))
        .catch((error) => res.status(401).send(error));
});

 // Specifiek user op name opvragen.
 routes.get('/user/:name', function(req, res)
{
     console.log("users/:id check");
     User.find({ userName: req.params.name })
         .then((user) => res.status(200).send(user))
         .catch((error) => res.status(401).send(error));
 });

// Nieuwe user, op basis van de request body.
 routes.post('/createUser', function(req, res)
{
  console.log("createUser check");
    let user = new User(req.body);
    user.save({})
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(401).send(error));
});

// Verwijder user.
routes.delete('/deleteUser/:id', function(req, res)
{
    console.log("deleteUser check");
    User.findByIdAndRemove({ _id: req.params.id })
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(401).send(error));
});

// Bewerkt user.
// voor als je de username zou willen kunnen aanpassen
routes.put('/editUser/:id', function(req, res) {
  console.log("editUser check");
    res.contentType('application/json');
    var id = req.params.id;
    var update = {
        "userName" : req.body.name
    };
    User.findById(id)
        .then( user => {
            user.set(update);
            user.save();
            res.status(200).json(user);
        })
        .catch((error) => res.status(401).json(error));
});

module.exports = routes;
