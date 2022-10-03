const mongoose = require("mongoose");

const newgroups=new mongoose.Schema({
descrepition:{
    type:String,
    minlength:1,
}
})
module.exports=mongoose.model('newgroups',newgroups);