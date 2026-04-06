const { Router } = require("express");

const { validateMovieData, logData } = require("../middleware");


const { moviesRouter } = require("./movies.router");

const router = Router();

router.use("/movies", moviesRouter)



module.exports = { router };


