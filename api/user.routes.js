var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');

const User = require('../model/user.model');

// Alle users ophalen via promise.
routes.get('/users', function(req, res)
{
    User.find({})
        .then((users) => res.status(200).send(users))
        .catch((error) => res.status(401).send(error));
});

 // Specifiek user op _id opvragen.
 routes.get('/users/:id', function(req, res)
{
     User.findById({ _id: req.params.id })
         .then((user) => res.status(200).send(user))
         .catch((error) => res.status(401).send(error));
 });

// Nieuwe user, op basis van de request body.
 routes.post('/createUser', function(req, res)
{
    let user = new User(req.body);
    user.save({})
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(401).send(error));
});

// Verwijder user.
routes.delete('/deleteUser/:id', function(req, res)
{
    User.findByIdAndRemove({ _id: req.params.id })
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(401).send(error));
});

// // Bewerkt user.
// routes.put('/editband/:id', function(req, res) {
//   console.log("hij komt in de mongo")
//     res.contentType('application/json');
//     var id = req.params.id;
//     console.log(req.body.name,req.body.genre,req.body.cdlist);
//     var update = {
//         "name" : req.body.name,
//         "genre" : req.body.genre,
//         "cdlist" : req.body.cdlist
//     };
//
//     Band.findById(id)
//         .then( band => {
//             band.set(update);
//             band.save();
//             res.status(200).json(band);
//
//         })
//         .catch((error) => res.status(401).json(error));
//
// });

module.exports = routes;
