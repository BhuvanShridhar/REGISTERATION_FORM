var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()
app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("Listening on port 3000")
