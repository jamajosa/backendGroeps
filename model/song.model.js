// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// song schema.
const SongSchema = new Schema({
    name: String,
    length: String,
    image: String
});

module.exports = SongSchema;
