const Cast = require('../models/cast')
const Movie = require('../models/movie')

exports.create = (castData) => Cast.create(castData)

exports.getAll = () => Cast.find()

exports.getBymovieId = async (movieId)=>{
    const casts = Cast.find({_id: {$in: castIds}});
    
    return casts; 
}