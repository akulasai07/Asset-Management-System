const { addVehicle, getVehicle, deleteVehicle, getVehicleById, updateVehicleById } = require('../controllers/vehicleController')


const router = require('express').Router()


router.post('/add-vehicle', addVehicle)
    .get('/get-vehicles', getVehicle)
    .get('/get-vehicle/:id' , getVehicleById)
    .delete('/delete-vehicle/:id', deleteVehicle )
    .put('/update-vehicle/:id',updateVehicleById)

module.exports= router