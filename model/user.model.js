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
 User.find({name : "Jordy H"}, function (err, docs)
{
    if (docs.length)
    {
    }
    else
    {
        const user = new User({
            name: 'Jordy H',
        }).save();
    }
});
module.exports = User;
