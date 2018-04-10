const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Playlist = require('../model/playlist.model');

const UserSchema = new Schema({
    userName: String,
    userPlaylists:
    [{
        playlist: Playlist
    }]
},
{
    timestamps: true
});
const User = mongoose.model('user', UserSchema);
//create a playlist
 Playlist.find({name : "Jordy"}, function (err, docs)
{
    if (docs.length)
    {
    }
    else
    {
        const User = new User({
            name: 'Jordy',
        }).save();
    }
});
module.exports = User;
