const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    studentName:{
        type: String,
        required: true,
    },
    studentRoll:
    {
        type:Number,
        required: true,

    },
}
); 
const student =mongoose.model("studentData",studentSchema);
module.exports =student