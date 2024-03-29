const router = require('express').Router()

const movieService = require('../services/movieService')
const castService = require('../services/castService')

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


router.get('/movies/:movieId',async (req,res) =>{
    const movieId = req.params.movieId
    const movie = await movieService.getOne(movieId).lean()
    
    movie.rating = new Array(Number(movie.rating)).fill(true)
    res.render('details',{ movie })
})


// router.get('/movies/:movieId/attach' ,async(req,res) =>{
//     const movie = await  movieService.getOne(req.params.movieId).lean()
//     const casts = await castService.getAll().lean()
//     res.render('movie/attach',{...movie,casts })
// })

router.get('/movies/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();
    // TODO: remove already added casts
    res.render('movie/attach', { ...movie, casts });
});

router.post('/movies/:movieId/attach', async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/attach`);
});

// router.post('/movies/:movieId/attach' , async (req,res) =>{
//     const castId = req.body.cast;
//     const movieId = req.params.movieId
//     await movieService.attach(movieId,castId)

//     res.redirect(`/movies/${movieId}/attach`)
 
// });
router.get('movies/:movieId/edit', async (req, res) => {
    res.render('movie/edit')
})
module.exports = router