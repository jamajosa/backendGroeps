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
 Playlist.find({name : "Jordy Huijgens"}, function (err, docs)
{
    if (docs.length)
    {
    }
    else
    {
        const User = new User({
            name: 'Jordy Huijgens',
        }).save();
    }
});
module.exports = User;
