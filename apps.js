var express=require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var {studentModel}=require('./models/studentsmodel')
const { facultyModel } = require('./models/facultyModel')


var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME")
})


app.post('/stud',(req,res)=>{
   
    var studentObject = new studentModel(req.body)

    res.json(studentObject)
})
app.post('/faculty',(req,res)=>{
    var facultyObject=new facultyModel(req.body)

    res.json(facultyObject)
})
app.listen(process.env.PORT||3002,()=>{
    console.log("Server started at http://localhost:3002/")
})