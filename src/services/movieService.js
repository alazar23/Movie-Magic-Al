const Movie = require('../models/movie')


exports.getAll = () => Movie.find();


exports.create = (movieData) => Movie.create(movieData)

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
exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

// exports.attach = async(movieId,castId) =>{
  
// const movie = await this.getOne(movieId) 

// movie.casts.push(castId)

// return movie.save()
// }
exports.attach = async (movieId, castId) => {
  // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
  const movie = await this.getOne(movieId);

  // TODO: validate castId if exists
  // TODO: validate if cast is already added
  movie.casts.push(cast);

  await movie.save();

  return movie;
};
