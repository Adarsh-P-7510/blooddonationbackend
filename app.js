const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const { bloodmodels } = require("./models/blood")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://adarshp:beenasadu@cluster0.6nnmmnj.mongodb.net/blooddonationapp?retryWrites=true&w=majority&appName=Cluster0")


app.post("/Adduser",(req,res)=>{
    let input = req.body
    let  blood = new bloodmodels(input)
    blood.save()
    console.log(blood)
    res.json({"status":"success"})

})

app.listen(8081,()=>{
    console.log("server started")
})
