require("dotenv").config()
const express = require("express");

const app=express();

const port=4000;

app.get('/',(req,res)=>{
    res.send('Hello Fucker!mhaw hah mhaw');
})

app.get('/twitter',(req,res)=>{
    res.send("yo bro its twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
//nodemon so we dont have to rerun the program again and again
app.get('/youtube',(req,res)=>{
    res.send('<h2>Eat shit buddy</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listing on port ${port}`)
})