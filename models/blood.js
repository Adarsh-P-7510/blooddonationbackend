const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "username":String,
        "bloodgroup":String,
        "age":String,
        "mobile":String,
        "email":String




    }
)
let bloodmodels = mongoose.model("bloods", schema)
module.exports={bloodmodels}