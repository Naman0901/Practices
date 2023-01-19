const express = require('express');
const route = require('./route');
const boadyparser = require('body-parser');
const app =express();

app.use(boadyparser.urlencoded({extended:false}));

app.use('/api',route);

app.get('/',(req,res)=>{
    res.end("Routing App");
})

app.listen(3000, ()=>{
    console.log("Express Server Running");
})