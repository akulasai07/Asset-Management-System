const { addSport, deleteSport, getSportById, updateSportById, getSports } = require('../controllers/sportItemController')


const router = require('express').Router()


router.post('/add-Sport', addSport)
    .get('/get-Sports', getSports)
    .get('/get-Sport/:id' , getSportById)
    .delete('/delete-Sport/:id', deleteSport )
    .put('/update-Sport/:id',updateSportById)

module.exports= router