const Movie = require('../models/movie')


  exports.getAll =  () =>{
   const movies = Movie.find()
   return movies
  }


exports.create = (movieData) =>{

  const result =  Movie.create(movieData)
    return result 
}

exports.search =(title,genre,year) =>{
  let query = {}
  if(title){
   // result = result.filter(movie =>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
    query.title = new RegExp(title,'i')
  }
  if(genre){
    //result = result.filter(movie =>movie.genre === genre)
    query.genre = new RegExp(genre,'i')
  }
  if(year){
  //  result = result.filter(movie =>movie.year === year)
    query.year = year
  
  return Movie.find(query)
}
}
exports.getOne = (movieId) => Movie.findById(movieId).populate('casts')

exports.attach = async(movieId,castId) =>{
  
const movie = await this.getOne(movieId) 

movie.casts.push(castId)

return movie.save()
}