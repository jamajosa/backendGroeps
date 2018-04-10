// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// song schema.
const SongSchema = new Schema({
    songid: String,
    title: String,
    artist: String,
    album: String
});

module.exports = SongSchema;
