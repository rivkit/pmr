const mongoose = require("mongoose");
// const meal = require("./meal");

const doseSchema=new mongoose.Schema({
    name:{
      type:String,
      minlength:2,
    },
     descKind :{
        type:String,
        minlength:2, 
     },
     status:{
        type:String,
        minlength:2,
     },
     age:{
        type:String,
        enum: ["0-6","6-12","12-18","18-24","24-36"]
     }
    })

module.exports=mongoose.model('doseSchema',doseSchema);
