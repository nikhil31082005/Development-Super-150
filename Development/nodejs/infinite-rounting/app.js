const express = require("express");
const path = require("path");
const app = express();

app.get('/', (req,res)=> {
    res.send("hello world");
})

// app.get('/',(req, res)=>{
//     res.send("Hello world");
// })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.get('/home', (req,res)=> {
    res.render('form');
})

app.get('/search', (req, res)=>{
    let {rest, dish} = req.query;
    res.send({rest, dish});
})

app.get("/r/:anything", (req,res)=>{
    let {anything} = req.params;
    res.send(anything);
})


app.listen(8080, ()=> {
    console.log("server started at 8080");
})