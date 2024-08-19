const { addEducationSupplies, getEducationSupplies, getEducationSuppliesById, deleteEducationSupplies, updateEducationSuppliesById } = require('../controllers/educationSuppliesController')



const router = require('express').Router()

router.post('/add-educationSupply', addEducationSupplies)
    .get('/get-educationSupplies', getEducationSupplies)
    .get('/get-educationSupply/:id' , getEducationSuppliesById)
    .delete('/delete-educationSupply/:id', deleteEducationSupplies )
    .put('/update-educationSupply/:id',updateEducationSuppliesById)

module.exports= router