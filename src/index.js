const express = require('express')
const mongoose = require("mongoose")

const router = require('./routes')
const confingHandelbars = require('./config/handlebarsConfig')
const configExpress = require('./config/configExpress')

const app = express()
const PORT = 5000

confingHandelbars(app)
configExpress(app)



app.use(router)


mongoose.connect(`mongodb://127.0.0.1/magic-movies`)
.then(() => {
        console.log('db connected')
        
        app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))
    })
    .catch(err=> console.log('cant connect to db'))
