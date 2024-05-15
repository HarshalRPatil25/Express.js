const express=require('express');
const app=express();

const port =3000;
app.use(express.json());
app.get('/check',(req,res)=>{
    const userName=req.headers.userName;
    const password=req.headers.password;
    const kidneyId=req.headers.kidneyId;
    if(userName!="Gudda" && password!="MCSTAN"){
        res.status(403).json({
            msg:"User Registation is Not done"

        });
    }
    else if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"failed"
        })
    }

})

app.listen(port);