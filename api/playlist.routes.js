var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
const User = require('../model/user.model');
const Song = require('../model/song.model');

//playlists ophalen
routes.get('/playlists/:id', function(req, res)
{
    console.log("/playlists/:id check");
    User.findById({ _id: req.params.id })
        .then((user.userPlaylists) => res.status(200).send(user.userPlaylists))
        .catch((error) => res.status(401).send(error));
});

//playlists toevoegen of deleten
routes.put('/addRemovePlaylist/:id', function(req, res) {
  console.log("editUser check");
    res.contentType('application/json');
    var id = req.params.id;
    var update = {
        "userPlaylists" : req.body.userPlaylist
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
