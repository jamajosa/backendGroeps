const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require('../model/song.model');

const PlaylistSchema = new Schema({
    name: String,
    genre: String,
    songs:
    [{
        song: Song
    }]
},
{
    timestamps: true
});
module.exports = PlaylistSchema;