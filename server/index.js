const express = require('express')
const mongoose= require('mongoose')
const cors=require('cors')

const app= express()
const studentModel=require('./modals/student')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://userName:7891216649a@crud.8byar.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser: true});

app.get("/read",async(req,res)=>{
    // const StudentName = req.body.name;
    // const StudentRoll = req.body.roll;
    // console.log(StudentName,StudentRoll);
    // const student1 =new studentModel({studentName:StudentName, studentRoll:StudentRoll})
   

    // try{
    //     const res1 = await student1.save();

    //     console.log("Data entered", res1)

    //     }catch(e){console.log(e);};
    studentModel.find({},(err,result)=>{
        if(err){res.send(err);}
        res.send(result);
    });
});

app.listen(3001,()=>{console.log("server running on port 3001");});
