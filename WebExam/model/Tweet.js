const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    tweetContent: {
        type: String,
        required: true,
    },
    timeStamps: {
        type: Date,
        default: Date.now
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;