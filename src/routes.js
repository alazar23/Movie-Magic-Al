const router = require('express').Router()

const homeController = require('./controllers/homeController')
const movieController = require('./controllers/createController')




router.use(homeController)
router.use(movieController)






module.exports = router