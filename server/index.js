const express = require('express')
const mongoose= require('mongoose')
const cors=require('cors')

const app= express()
const studentModel=require('./modals/student')
const { update } = require('./modals/student')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://userName:7891216649a@crud.8byar.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser: true});

app.get("/read",async (req, res)=>{
  studentModel.find({},(err,result)=>{
    if(err){res.send(err);}
    res.send(result);
  });
});
app.post("/insert",async(req,res)=>{
   const StudentName = req.body.name;
    const StudentRoll = req.body.roll;
    console.log(StudentName,StudentRoll);
    const student1 =new studentModel({studentName:StudentName, studentRoll:StudentRoll})
try { 
  await student1.save();
  res.send("data inserted!");
}catch(err){
  console.log(err);
}
})

app.put("/update",async(req,res)=>{
   
    const StudentNewName = req.body.newName;
    const id = req.body.id;
    try{
      await  studentModel.findById(id,(err,updatedName)=>{
            updatedName.studentName=StudentNewName;
            updatedName.save();
            res.send("update");
        })

        }catch(err){console.log(err);};
});
app.delete("/delete/:id",async (req, res)=>{
const id1= req.params.id;
await studentModel.findByIdAndRemove(id1).exec()
res.send("deleted");
})


app.listen(3001,()=>{console.log("server running on port 3001");});
