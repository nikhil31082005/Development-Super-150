const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    tweetContent: {
        type: String,
        required: true,
    },
    time: {
        type: String, // Use String to store time separately if needed
        default: new Date().toLocaleTimeString(), // Optional default
    },
    date: {
        type: Date,
        default: Date.now, // Automatically stores the current date
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
