//settings up the server
const express=require('express');
const zod=require('zod');
const bodyParser = require('body-parser');
const app=express();


app.use(bodyParser.json());

//Setting a format for inputs
const schema=zod.object({
    userName:zod.string(),
    password:zod.string().min(5),
    email:zod.string().email()
});

//create the post request to access the inputs
app.post('/',(req,res)=>{
    const {userName ,password,email}=req.body;
    const response=schema.safeParse({userName,password,email});
    if(response.success){
        res.status(200).json({
            "msg":"Successfully process is  carried out"
        })
    }
    else if(!response.success){
        res.status(401).send("Check the inputs");
    }
})

//executing http port on server
app.listen(5000)
