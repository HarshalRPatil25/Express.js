//Import Express from JS
const express=require('express');
//Calling express
const app=express();
//Declaring server ports
const port=3000;


//Create get method

app.get('/',(req,res)=>{

    res.send("<h1>Server  is Running</h1>")
})

app.listen(port);