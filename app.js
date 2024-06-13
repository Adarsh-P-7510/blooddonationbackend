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
app.get("/Viewall",(req,res)=>{
    bloodmodels.find().then(
        (data)=>{
            res.json(data)
        }
    )
})
app.post("/Searchuser",(req,res)=>{
    let input = req.body
    bloodmodels.find(input).then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
    
})
app.post("/Deleteuser",(req,res)=>{
    let input = req.body
    bloodmodels.findByIdAndDelete(input._id).then(
    (response)=>{
        res.json({"status":"deleted"})
    }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )

})
app.listen(8081,()=>{
    console.log("server started")
})
