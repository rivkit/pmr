const { Double } = require("bson");
const mongoose = require("mongoose");
const { default: isEmail } = require("validator/lib/isemail");
const groups = require("./groups");
// const{default:isEmail}=require("email-validator")
// var validator = require("email-validator");


const addressSchema=new mongoose.Schema({
Neighborhood:{
    type:String,
    minlength:2,
},
 Street :{
    type:String,
    minlength:2, 
 },
 City:{
    type:String,
    minlength:2,
 }
})

const BabiesSchema=new mongoose.Schema({
    Image:{ 
        type:String,
    },
    FullName:{ 
        type:String,
        minlength:2,
    },
   
    Id:{ 
        type:String,
        minlength:9,
        maxlength:9
    },
    Group:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:groups
     },
    Phone:{ 
        type:Number,
        minlength:7,
    },
    Email:{ 
        type:String,
        validate:[isEmail,'כתובת מייל לא תקינה'],
        unique:true,
    },
    Address: addressSchema ,
    Age:{ 
        type:Number,
    },
    Status:{ 
        type:String
    },
    
   
    
},{timestamps:true})
// BabiesSchema.virtual('babyGroup',{
//     ref: 'newgroups',
//     localField:'Group',
//     foreignField:'_id'
//     },{virtuals:true});
//     BabiesSchema.set('toJSON',{virtuals:true});


module.exports=mongoose.model('BabiesSchema',BabiesSchema);


