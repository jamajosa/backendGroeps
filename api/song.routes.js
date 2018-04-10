var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
const User = require('../model/user.model');
const Playlist = require('../model/playlist.model');
