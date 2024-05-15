const express=require('express');
const app=express();
const port=3000;

const  a1=(req,res,next)=>{
    const h1=req.header.h1;
    const p=req.head.p;

    if(h1!="bangi" && p!="12456"){
        res.send("kuccha to hua hai");
        
    }
    else{
        next();
    }


}

app.get('/',a1,(req,res)=>{
    res.send("Donee")

})

app.listen(port);