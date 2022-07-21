var mongoose=require('mongoose')

var facultySchema = new mongoose.Schema(

    {
 name:{
    type:String,
    required: true
 },
 department:{
    type:String,Number,
    required:true
 },
 subject:{
    type:String,
    required:true
 } 

    }
)

var facultyModel=mongoose.model('faculties',facultySchema)


module.exports={facultyModel}