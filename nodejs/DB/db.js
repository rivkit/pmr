const mongoose=require('mongoose');
const dotnev=require ( 'dotenv' )
   dotnev.config();

   
class Database{
    constructor(){
        this._conect();
    }

async _conect(){
    await mongoose.connect(process.env.CONNECTION_STRING)
   .then
   (()=>{
        console.log("connected to mongoose db");
    })
    .catch(err=>{
        console.error('Database connection error')
    })
}
}
module.exports=new Database()

