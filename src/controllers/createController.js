const router = require('express').Router()

const movieService = require('../services/movieService')

router.get('/create',(req,res) =>{
    res.render('create')
})

router.post('/create',async (req,res) =>{
    const newMovie = req.body
    res.redirect('/')
    try {
        await movieService.create(newMovie)
    } catch (err) {
        console.log(err.message);
        res.status(400).end()
        res.redirect('/create')
    }
    
})




router.get('/movies/:movieId',(req,res) =>{
    const movieId = req.params.movieId
    const movie = movieService.getOne(movieId)
    res.render('details',{movie})
})


module.exports = router