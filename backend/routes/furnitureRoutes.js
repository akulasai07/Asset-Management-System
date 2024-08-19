const { addFurniture, getFurniture, getFurnitureById, deleteFurniture, updateFurnitureById } = require('../controllers/furnitureController')


const router = require('express').Router()

router.post('/add-furniture', addFurniture)
    .get('/get-furnitures', getFurniture)
    .get('/get-furniture/:id' , getFurnitureById)
    .delete('/delete-furniture/:id', deleteFurniture )
    .put('/update-furniture/:id',updateFurnitureById)

module.exports= router