const express = require('express');
const Tweet = require('../model/Tweet')
const Router = express.Router();

Router.get('/tweets', async (req, res) => {
    const tweets = await Tweet.find({});
    console.log(tweets);
    res.render('Show',{tweets});
})

Router.get('/tweet/new', (req, res) => {
    res.render('New');
})

Router.post('/tweet/new', async (req, res) => {
    const {tweetContent} = req.body;
    // console.log(tweetContent);
    
    const newTweet = new Tweet({tweetContent});
    newTweet.save();
    res.redirect('/tweets');
})

Router.delete('/delete/', (req, res) => {
    const {id} = req.params;
    console.log(id);
    Tweet.findByIdAndDelete(id);
    res.redirect('/tweets');
})


module.exports = Router;