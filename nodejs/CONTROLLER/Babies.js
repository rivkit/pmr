const mongoose=require('mongoose');
const {ObjectId}=require('mongodb');
const Baby=require('../MODELS/Babies');


async function addBaby(req,res,next){
    try{
        console.log(req.body)
        const newBaby=await new Baby(req.body);
        const inserted=await newBaby.save()
        await res.send(inserted)
    }
    catch(error){
        res.send(`erorr ${error}`)
        next(error)
    }
}
async function get(req,res,next){
    try{
    const baby=await Baby.find().populate('Group').populate('Address');
    console.log(baby)

    res.send(baby)
}
catch(error){
    res.send(`erorr ${error}`)
    next(error)
}}

async function getByGroupId(req, res, next) {
    try {
        const id = req.params.id;
        const group = await Baby.find({"Group": id })
        res.send(group)
    }
    catch (error) {
        res.send(`erorr ${error}`)
        next(error)
    }
}
// .populate('Group');
// async function getById(req,res,next){
//     try{
//     const user=await User.findById(ObjectId(req.params.id));
//        res.send(user)
//     }
//     catch(erorr){
//     res.send(`erorr ${erorr}`)
//     next(error)
// }
//  }

//  async function getByEmailandpassword(req,res,next){
//     try{
//     const user=await User.findOne({Email:req.params.Email,Password:req.params.Password});
//     if(user)
//        res.send(user)
//        else
//        res.status(204).send(user)
//     }
//     catch(error){
//     res.send(`error ${error}`)
//     next(error)
// }
//  }
 
async function updateBaby(req,res,next){
    if(req.body){
        const id=req.params.id;
        try{
            const {Image,FullName,Group,Phone,Email,Address,Age,Status}=req.body;
            const data={
                Image:Image,
                FullName:FullName,
                // Id:Id,
                Group:Group,
                Phone:Phone,
                Email:Email,
                Address:Address,
                Age:Age,
                Status:Status

                }
     const newBaby=await Baby.findByIdAndUpdate(id,data,{new:true});
     res.send(newBaby) }
            
    catch(error){
     console.log(error)
     res.send(error)
     next(error)
    }}
}

    
async function deleteBaby(req,res,next){
    try{
    const id=req.params.id;
    const ToDelete=await Baby.deleteOne({"_id":id});
     res.send(ToDelete);
    }
    catch(error){
        res.send(`erorr ${error}`)
        next(error)
    }
}

// async function getById(req,res,next){
//     try{
//        // const id=req.params.id;
//         const data=await User.findById(ObjectId(req.params.id)).populate({path:'userOrders', select:'OrderSum OrderDate'});
//         console.log(data);
//         res.send(data)
//     }
//     catch(err){
//       next(err)  
//     }  
//     }
module.exports={addBaby,get,getByGroupId,updateBaby,deleteBaby}


