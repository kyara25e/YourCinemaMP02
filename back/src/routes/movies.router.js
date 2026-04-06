const { Router } = require("express");
const { getMoviesController, createMovieController } = require("../controllers/movies.controller");
const { validateMovieData, logData } = require("../middleware");

const moviesRouter = Router();

moviesRouter.get("/", logData, getMoviesController) 
moviesRouter.post("/", logData, validateMovieData, createMovieController)

module.exports = { 
    moviesRouter 
}