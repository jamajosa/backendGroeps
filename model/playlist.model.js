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
});
module.exports = PlaylistSchema;
