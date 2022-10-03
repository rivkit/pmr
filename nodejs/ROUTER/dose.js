const express = require('express');
const router=express.Router()
const controller=require('../CONTROLLER/dose')



router.get('/',controller.get)

router.post('/',controller.addDose)

router.delete('/:id',controller.deleteDose)

module.exports=router