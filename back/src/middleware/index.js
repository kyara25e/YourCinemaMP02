const validateMovieData = (req, res, next) => {
 
    const labels = [ "title", "year", "director", "duration", "genre", "rate", "poster" ]

    const missingLabels = labels.filter( label => !req.body[label])


    if(missingLabels.length > 0){
        res.status(401).json({
            msg: `Faltan valores para crear la pelicula: ${missingLabels.join(', ')}` 
        })
        
    } else {
        next()
    }
}

const logData = (req,res,next) => {
    const timestramp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    
    console.log(`[${timestramp}] ${method} ${url}`);

    next();
}

module.exports = {
    validateMovieData,
    logData
}