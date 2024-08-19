const { addSafetyItem, getSafetyItem, getSafetyItemById, deleteSafetyItem, updateSafetyItemById } = require('../controllers/safetyController')



const router = require('express').Router()

router.post('/add-safetyItem', addSafetyItem)
    .get('/get-safetyItems', getSafetyItem)
    .get('/get-safetyItem/:id' , getSafetyItemById)
    .delete('/delete-safetyItem/:id', deleteSafetyItem )
    .put('/update-safetyItem/:id',updateSafetyItemById)

module.exports= router