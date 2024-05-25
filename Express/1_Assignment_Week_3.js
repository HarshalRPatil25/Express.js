const jwt=require('jsonwebtoken');
const zod=require('zod');
const key="ahdbkjfah";
const data={
    "email":"harshalrp25@gmail.com",
    "password":"Harshal@25"
}

function input_Validation(data){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(6)
    });

    const response=schema.safeParse(data);
    return response.success;
}


const result=input_Validation(data);
let token;

function tokenGeneration(result){
    if(result){
        token=jwt.sign(data,key);
        
    }
    else{
        console.log("value is not correct");
    }
    


}
tokenGeneration(result);
console.log(token);