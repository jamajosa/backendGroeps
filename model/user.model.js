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
 User.find({userName : "Jordy H"}, function (err, docs)
{
    if (docs.length)
    {
    }
    else
    {
        const user = new User({
            userName: 'Jordy H',
        }).save();
    }
});
module.exports = User;
