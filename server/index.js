const express = require('express')
const mongoose= require('mongoose')
const app= express()
const studentModel=require('./modals/student')

app.use(express.json())

mongoose.connect("mongodb+srv://userName:7891216649a@crud.8byar.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser: true});

app.get('/',async(req,res)=>{
    const student =new studentModel({studentName:"pankaj",studentRoll:3})
    try{
        const res = await student.save();
        console.log("Data entered", res)
        }catch(e){console.log(e);};
});

app.listen(3001,()=>{console.log("server running on port 3001");});
