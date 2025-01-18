const express = require("express");
const Router = express.Router();
const Tweet = require("../model/Tweet");

Router.get("/tweets", async (req, res) => {
    const tweets = await Tweet.find({});
    // console.log(tweets);
    res.render("show", { tweets });
});

Router.get("/tweet/new", (req, res) => {
    res.render("new");
});

Router.post("/tweets", (req, res) => {
    const { heading, tweetContent } = req.body;
    // console.log(req.body);
    const newTweet = new Tweet({ heading, tweetContent });
    newTweet.save();
    res.redirect("/tweets");
});

Router.get("/tweet/:id/edit", async (req, res) => {
    const { id } = req.params;
    const tweets = await Tweet.findById(id);
    res.render("edit", { tweets });
});

Router.post("/tweet/:id", async (req, res) => {
  const { id } = req.params;
  const { heading, tweetContent } = req.body;
  console.log(req.body);
  const tweet = await Tweet.findByIdAndUpdate(
    id,
    { heading, tweetContent },
    { new: true }
  );
  res.redirect("/tweets");
});

// Router.put("/tweet/:id", async (req, res) => {
//     const { id } = req.params;
//     const {heading, tweetContent } = req.body;
//     console.log(req.body);
//     const tweet = await Tweet.findByIdAndUpdate(
//         id,
//         { heading, tweetContent },
//         { new: true }
//     );
//     res.redirect("/tweets");
// })

Router.post("/tweet/:id/delete", async (req, res) => {
    const { id } = req.params;
    const deletedTweet = await Tweet.findByIdAndDelete(id);
    res.redirect("/tweets");
});

// Router.delete("/tweet/:id/delete", async (req, res) => {
//     const { id } = req.params;
//     const deletedTweet = await Tweet.findByIdAndDelete(id);
//     res.redirect("/tweets");
// });

module.exports = Router;
