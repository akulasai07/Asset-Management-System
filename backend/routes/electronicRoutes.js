const { addElectronic, getElectronic, getElectronicById, deleteElectronic, updateElectronicById } = require('../controllers/electronicController')



const router = require('express').Router()

router.post('/add-electronic', addElectronic)
    .get('/get-electronics', getElectronic)
    .get('/get-electronic/:id' , getElectronicById)
    .delete('/delete-electronic/:id', deleteElectronic )
    .put('/update-electronic/:id',updateElectronicById)

module.exports= router