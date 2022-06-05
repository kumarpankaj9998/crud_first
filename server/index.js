const express = require('express')
const mongoose= require('mongoose')
const cors=require('cors')

const app= express()
const studentModel=require('./modals/student')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://userName:7891216649a@crud.8byar.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser: true});

app.post("/insert",async(req,res)=>{
    const StudentName = req.body.studentName;
    const StudentRoll = req.body.studentRoll;
    console.log(StudentName,StudentRoll);
    const student1 =new studentModel({studentName:StudentName, studentRoll:StudentRoll})
   

    try{
        const res1 = await student1.save();

        console.log("Data entered", res1)

        }catch(e){console.log(e);};
});

app.listen(3001,()=>{console.log("server running on port 3001");});
