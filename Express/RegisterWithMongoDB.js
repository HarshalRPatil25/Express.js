const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const zod= require('zod');


    const schema=zod.object({
        Name:zod.string(),
        Age:zod.number().min(12),
        Email:zod.string().email(),
        Password:zod.string().min(8)
    })

mongoose.connect('mongodb://localhost:27017/');

app.use(bodyParser.json());

const user = mongoose.model('user1', { 
    name: String ,
    age:Number, 
    email:String,
    password:String
});

let verify=false;
let count=0;
app.post('/register',async(req,res)=>{
    const {Name,Age,Email,Password}=req.body;
    const response=schema.safeParse({Name,Age,Email,Password});

    if(response.success){
        const exits=await user.findOne({email:Email ,password:Password});
        if(exits){
            res.status(501).send("User Already Registered");
        }
        const Users = new user(
            { name:Name ,
                age:Age,
               email:Email,
               password:Password
             });
  
              Users.save().then(() => console.log('meow'));

              verify=true;
              count++;


    }
    res.json({
        msg:'Registred Successfully'
    })
     
})








app.listen(3000);
