const Movie = require('../models/movie')
const movies = [{
    _id:1,
    title: 'Suits',
    genre: 'Goten',
    director: 'az',
    year: '2020',
    imageUrl: 'nqma',
    rating: '5',
    description: 'mnogo top film'
  }]

  exports.getAll = () =>{
    return movies.slice()
  }


exports.create = async (movieData) =>{

  const result =  await Movie.create(movieData)
    return result 
}
 exports.getOne = (movieId) =>{
  const movie = movies.find(movie => movie._id == movieId)
  return movie 
 }

 exports.search =(title,genre,year) =>{
  let result = movies.slice()
  if(title){
    result = result.filter(movie =>movie.title.includes(title))
  }
  if(genre){
    result = result.filter(movie =>movie.genre === genre)
  }
  if(year){
    result = result.filter(movie =>movie.year === year)
  }
  return movies

 }