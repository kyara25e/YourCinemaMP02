const { dbConnection } = require("./src/db/dbConfig");
const { app } = require("./src/server");
require("dotenv").config()

const { PORT } = process.env

dbConnection()
    .then(() => {
        console.log('la coneccion a la base de datos fue exitosa');
        app.listen( PORT, () => {
            console.log(`Server listen on port &{PORT}`);
        });
    })
    .catch( error => console.log(error));
