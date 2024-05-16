const express=require('express');
const app=express();
const port=3000;


const zod=require('zod');
const schema=zod.object({
    userName:zod.string(),
    password:zod.string(),
})

app.use(express.json())

app.post('/',(req,res)=>{
    const {userName,password}=req.body;
    const respone=schema.safeParse({userName,password});
    res.send(respone);


})

app.listen(port);