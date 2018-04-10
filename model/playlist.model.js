const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require('../model/song.model');

const PlaylistSchema = new Schema({
    playlistName: String,
    playlistGenre: String,
    playlistSongs:
    [{
        song: Song
    }]
},
{
    timestamps: true
});
module.exports = PlaylistSchema;
