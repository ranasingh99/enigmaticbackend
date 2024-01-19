require('dotenv').config()


const express = require('express');

const app = express();

const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello from the express");

});

app.get('/login',(req,res)=>{
    res.send(`<h1>user is trying to login in our app</h1>`);
})

app.get('/instagram',(req,res)=>{
    res.send('ranadpsingh_99');
})

app.listen(process.env.PORT , ()=>{
    console.log(`app is listening on port ${port}`);
})