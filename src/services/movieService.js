
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


exports.create = (movieData) =>{
  movieData._id = movies[movies.length + 1]._id + 1
    movies.push(movieData)
}
 exports.getOne = (movieId) =>{
  const movie = movies.find(movie => movie._id == movieId)
  return movie 
 }