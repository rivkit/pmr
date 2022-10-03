const express = require('express');
const router=express.Router()
const controller=require('../CONTROLLER/Babies')


// router.get('/:id',controller.getById)

router.get('/',controller.get)

router.get('/:id',controller.getByGroupId)

router.post('/',controller.addBaby)

router.put('/:id',controller.updateBaby)

router.delete('/:id',controller.deleteBaby)

module.exports=router

