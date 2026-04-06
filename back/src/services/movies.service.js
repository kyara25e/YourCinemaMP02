const { Movie } = require("../models/Movies");

const getMovieService = async () => {
  return await Movie.find()
}

const createMovieService = async (movie) => {
  return await Movie.create(movie)
}

module.exports =  { 
  getMovieService,
  createMovieService
}