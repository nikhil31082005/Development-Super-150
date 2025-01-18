const express = require("express");
const app = express();

// app.use((req, res, next) => {})  // req, res => object , next=> function

app.use( (req, res, next) => {
    // res.send('<h1>middleware chal gya</h1>')  // should not send response because it sends the response to the directly and do not goes to next function or the route
    // next()

    console.log("middleware chal gya");
    next();
} )

app.get("/:anything", (req, res)=> {
    let {anything} = req.params;
    res.send(anything);
})

app.get('/',(req, res)=>{
    res.send("Hello world");
})

app.listen(8080, () => {
    console.log("Server connected at port 8080");
})

