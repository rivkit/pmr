const Group = require('../MODELS/groups');
const { ObjectId } = require('mongodb');

async function addGroup(req, res, next) {
    try {
        console.log(req.body)
        const newGroup = await new Group(req.body);
        const inserted = await newGroup.save()
        await res.send(inserted)
    }
    catch (error) {
        res.send(`erorr ${error}`)
        next(error)
    }
}
async function get(req, res, next) {
    try {
        const group = await Group.find()
        res.send(group)
    }
    catch (error) {
        res.send(`erorr ${error}`)
        next(error)
    }
}

async function deleteGroup(req, res, next) {
    try {
        const id = req.params.id;
        const ToDelete = await Group.deleteOne({ "_id": id });
        res.send(ToDelete);
    }
    catch (error) {
        res.send(`erorr ${error}`)
        next(error)
    }
}


module.exports = { addGroup, get, deleteGroup }