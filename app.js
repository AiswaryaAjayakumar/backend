var express=require('express')

app=express()
app.get('/',(req,res)=>{
    res.send("Hello")  
})
app.get("/home",(req,res)=>{

    res.send("Welcome to home page")
})

app.listen(3000)