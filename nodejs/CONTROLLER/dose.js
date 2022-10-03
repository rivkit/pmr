const Dose=require('../MODELS/dose');
const {ObjectId}=require('mongodb');

async function addDose(req,res,next){
    try{
        const newDose=await new Dose(req.body);
        const inserted=await newDose.save()
        await res.send(inserted)
    }
    catch(error){
        res.send(`erorr ${error}`)
        next(error)
    }
}
async function get(req,res,next){
    try{
    const dose=await Dose.find()
    res.send(dose)
}
catch(error){
    res.send(`erorr ${error}`)
    next(error)
}}

async function deleteDose(req,res,next){
    try{
    const id=req.params.id;
    const ToDelete=await Dose.deleteOne({"_id":id});
     res.send(ToDelete);
    }
    catch(error){
        res.send(`erorr ${error}`)
        next(error)
    }
}


module.exports={addDose,get,deleteDose}