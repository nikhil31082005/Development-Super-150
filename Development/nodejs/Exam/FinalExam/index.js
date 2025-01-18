const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const contactRoute = require('./routes/contact');

mongoose.connect('mongodb://127.0.0.1:27017/finalExam')
.then(function(){
    console.log("mongoDB connected");
})
.catch(function(err){
    console.log("something went wrong");
})

const app = express();

app.use()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(contactRoute);


app.get('*', (req, res) => {
    res.send("404 not found");
})

app.listen(8000, () => {
    console.log("Server connected at 8000");
})