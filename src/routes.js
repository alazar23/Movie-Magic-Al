const router = require('express').Router()

const homeController = require('./controllers/homeController')
const movieController = require('./controllers/createController')




router.use(movieController)

router.use(homeController)





module.exports = router