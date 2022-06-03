const express = require('express')
const mongoose= require('mongoose')
const app= express()
const studentModel=require('./modals/student')

app.use(express.json())

mongoose.connect("mongodb+srv://userName:7891216649a@crud.8byar.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser: true});

app.get("/",async(req,res)=>{
    const student1 =new studentModel({studentName:"pankaj",studentRoll:3})
    const student2= new studentModel({studentName:"varun",studentRoll:4})

    try{
        const res1 = await student1.save();
        const res2 = await student2.save();
        console.log("Data entered", res1)
        console.log("Data entered", res2)
        }catch(e){console.log(e);};
});

app.listen(3001,()=>{console.log("server running on port 3001");});
