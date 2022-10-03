const express = require('express');
const router=express.Router()
const controller=require('../CONTROLLER/groups')


// router.get('/:id',controller.getById)

router.get('/',controller.get)

router.post('/',controller.addGroup)

router.delete('/:id',controller.deleteGroup)

module.exports=router

