const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname,'public')))

// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'))



// app.get('/', (req, res) => {
//     let lucky = Math.floor(Math.random()*10);
//     res.render('Home',{lucky});
// })

// app.get('/shadi', (req, res)=>{
//     let naam = 'hello'
//     res.render('dulha', {naam})
// })

let dummyBlogs = [
    {
        id: 0,
        author: "sam",
        comment: "padhai"
    },
    {
        id: 1,
        author: "monu",
        comment: "bklol"
    },
    {
        id: 2,
        author: "manas",
        comment: "balak"
    },
]

app.get('/blogs' ,(req, res)=>{
    res.render('index', {dummyBlogs});
})

app.get('/blog/new', (req, res)=> {
    res.render('new');
})

// adding blog in db

app.post('/blogs', (req,res)=>{
    const {author, comment} = req.body;
    let id = dummyBlogs.length;
    dummyBlogs.push({id, author, comment});
    console.log(dummyBlogs);
    res.redirect('/blogs');
})

// show particaulat blog

app.get('/blogs/:id', (req, res)=> {
    let {id} = req.params;
    let returnedItem = dummyBlogs.find((obj) => obj.id === parseInt(id));
    res.render('show', {returnedItem});
})


app.get('/blogs/:id/edit',(req, res)=>{
    let {id} = req.params;
    let returnedItem = dummyBlogs.find((obj) => obj.id === parseInt(id));
    res.render('edit',{returnedItem})
})

app.patch('/blogs/:id', (req, res)=>{
    let {id} = req.params;
    let {author, comment} = req.body;
    let returnedItem = dummyBlogs.find((obj) => obj.id === parseInt(id));
    returnedItem.author = author;
    returnedItem.comment = comment;
    res.render('show', {returnedItem});
})

app.delete('blogs/:id', (req, res)=>{
    let {id} = req.params;
    let dummyBlogs = dummyBlogs.filter((obj) => obj.id !== parseInt(id));
    res.redirect('/blogs', {dummyBlogs});
})


app.listen(8000, ()=>{
    console.log("connected");
})