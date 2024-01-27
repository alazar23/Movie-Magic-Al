const router = require('express').Router()

const homeController = require('./controllers/homeController')
const movieController = require('./controllers/createController')
const castController = require('./controllers/castCotroller')




router.use(movieController)
router.use('/cast',castController)



//tozi kontroler vinagi trqbva da e posleden glupako!!!
router.use(homeController) //<-----------------------------!!!
//ne go pipai!!!! 
module.exports = router