var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
const User = require('../model/user.model');
const Playlist = require('../model/playlist.model');

song toevoegen aan een playlist
routes.post('/addSong/:playListId/:id', function(req, res) {
  console.log("addSong check");
    res.contentType('application/json');
    var id = req.params.id;
    var playListId = req.params.playListId;
    User.findById(id)
        .then( user => {
          Playlist.findById(playList)
              .then( playlist => {
                playlist.userPlaylists.push(req.body);
                user.save();
                res.status(200).json(playlistid);
          })
          .catch((error) => res.status(401).json(error))
        })
        .catch((error) => res.status(401).json(error));
});

module.exports = routes;
