const express = require('express')

const router = require('./routes')
const confingHandelbars = require('./config/handlebarsConfig')
const configExpress = require('./config/configExpress')

const app = express()
const PORT = 5000

confingHandelbars(app)
configExpress(app)


app.use(router)





app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`))