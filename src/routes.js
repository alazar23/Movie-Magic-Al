const router = require('express').Router()

const homeController = require('./controllers/homeController')
const movieController = require('./controllers/createController')
const castController = require('./controllers/castCotroller')
const authController = require('./controllers/authController')



router.use(movieController)
router.use('/cast',castController)
router.use('/auth',authController)



//tozi kontroler vinagi trqbva da e posleden glupako!!!
router.use(homeController) //<-----------------------------!!!
//ne go pipai!!!! 
module.exports = router