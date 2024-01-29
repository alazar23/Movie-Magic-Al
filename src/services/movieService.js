const Movie = require('../models/movie')


  exports.getAll =  () =>{
   const movies = Movie.find()
   return movies
  }


exports.create = (movieData) =>{

  const result =  Movie.create(movieData)
    return result 
}

exports.search =async(title,genre,year) =>{
  let result = await Movie.find().lean()
  if(title){
    result = result.filter(movie =>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
  }
  if(genre){
    result = result.filter(movie =>movie.genre === genre)
  }
  if(year){
    result = result.filter(movie =>movie.year === year)
  }
  return result
}

exports.getOne = (movieId) =>{
 const movie = Movie.findById(movieId)
 return movie 
}

exports.attach = async(movieId,castId) =>{
  
const movie = await this.getOne(movieId) 

movie.casts.push(castId)

return movie.save()
}