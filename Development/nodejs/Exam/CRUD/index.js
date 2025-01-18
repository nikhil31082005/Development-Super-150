const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const tweetRoute = require('./routes/tweet')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/webExam')
.then(function(){
    console.log("DB connected");
})
.catch(function(err){
    console.log(err, "DB not connected");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.use(tweetRoute);


app.get('*', (req, res)=> {
    res.send("404 NOT Found");
})

app.listen(8080, () => {
    console.log("Server started at 8080!");
})