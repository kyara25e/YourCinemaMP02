const { getMovieService, createMovieService } = require("../services/movies.service");

const getMoviesController = async (req, res) => {

    try {
        const resultado = await getMovieService();
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
    
}

const createMovieController = async (req, res) => {

    try {
        const resultado = await createMovieService(req.body);
        res.status(200).json({
            msg: 'pelicula creada con exito',
            data: resultado
        });
    } catch (error) {

        console.log(error)

        res.status(500).json({ 
            error: error.message 
        })
    }
};

module.exports = { 
    getMoviesController,
    createMovieController
};
