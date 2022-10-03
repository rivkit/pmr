const mongoose=require('mongoose');
const {ObjectId}=require('mongodb');
const Meal=require('../MODELS/meal');


async function addMeal(req,res,next){
    try{
        console.log(req.body)
        const newMeal=await new Meal(req.body);
        const inserted=await newMeal.save()
        await res.send(inserted)
    }
    catch(error){
        res.send(`erorr ${error}`)
        next(error)
    }
}
async function get(req,res,next){
    try{
    const meal=await Meal.find().populate('doses');
    res.send(meal)
}
catch(error){
    res.send(`erorr ${error}`)
    next(error)
}}

async function updateMeal(req,res,next){
    if(req.body){
        const id=req.params.id;
        try{
            const {name,kind,age,mealTime,day}=req.body;
            const data={
                name:name,
                kind:kind,
                age:age,
                mealTime:mealTime,
                day:day
                }
     const newMeal=await Meal.findByIdAndUpdate(id,data,{new:true});
     res.send(newMeal) }
            
    catch(error){
     console.log(error)
     res.send(error)
     next(error)
    }}
}

    
async function deleteMeal(req,res,next){
    try{
    const id=req.params.id;
    const ToDelete=await Meal.deleteOne({"_id":id});
     res.send(ToDelete);
    }
    catch(error){
        res.send(`erorr ${error}`)
        next(error)
    }
}


module.exports={addMeal,get,updateMeal,deleteMeal}


