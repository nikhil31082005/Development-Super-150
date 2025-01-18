const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const productRoute = require('./routes/product');

mongoose.connect('mongodb://127.0.0.1:27017/khidki')
.then(function(){
    console.log("DB connected");
})
.catch(function(err){
    console.log(err, "DB not coonected");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));


app.use(productRoute);


// app.get('/',(req, res)=>{
//     res.send("hello world")
// })

app.listen(8080, ()=> {
    console.log("server connected");
})




// model is a js class...  Schema
// we cannot create modal directly
// MVP : Minimal Vibal Product