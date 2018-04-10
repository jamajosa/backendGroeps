// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// song schema.
const SongSchema = new Schema({
    songId: String,
    songTitle : String,
    songArtist: String,
    songAlbum: String
});

module.exports = SongSchema;
