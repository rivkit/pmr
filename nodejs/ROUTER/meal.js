const express = require('express');
const router=express.Router()
const controller=require('../CONTROLLER/meal')


router.get('/',controller.get)

router.post('/',controller.addMeal)

router.put('/:id',controller.updateMeal)

router.delete('/:id',controller.deleteMeal)

module.exports=router



