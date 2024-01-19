const router = require('express').Router()


router.get('/',(req,res) =>{
    res.render('home')
})


router.get('/about',(req,res) =>{

})



module.exports = router