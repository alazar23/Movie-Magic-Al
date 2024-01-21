
const movies = [{
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
    movies.push(movieData)
}
