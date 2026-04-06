
const axios = require("axios")
function createFormFunc() {
  const form = document.getElementById("form");
  if (!form) return;

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const selectedGenres = [
      ...document.querySelectorAll('input[type="checkbox"]:checked')
    ].map(input => input.value);

    const newMovieData = {
      title: document.getElementsByName("title")[0].value.trim(),
      genre: document.getElementsByName("genres")[0].value.trim(),
      director: document.getElementsByName("director")[0].value.trim(),
      rate: document.getElementsByName("rate")[0].value.trim(),
      year: Number(document.getElementsByName("year")[0].value.trim()),
      duration: document.getElementsByName("duration")[0].value.trim(),
      poster: document.getElementsByName("poster")[0].value.trim(),
    };

    const emptyFields = [];

    for (const key in newMovieData) {
      const value = newMovieData[key];

      if (typeof value === "string" && value.length === 0) emptyFields.push(key);
      if (Array.isArray(value) && value.length === 0) emptyFields.push(key);
      if (typeof value === "number" && isNaN(value)) emptyFields.push(key);
    }

    if (emptyFields.length > 0) {
      alert(`Faltan campos obligatorios: ${emptyFields.join(", ")}`);
      return;
    }


    
    try {
      const res = await axios.post("http://localhost:3000/movies", newMovieData);

      console.log("CREADA", res.data);
      alert("Pelicula creada con exito")
      form.reset();
      

    } catch (err) {
      console.error("ERROR", err.response?.data || err.message);
      alert("No se pudo crear la película");
      if(err.response.data.error.includes('title_1 dup key')){
        alert("El título de la película se encuentra duplicado, intente con uno nuevo.");
      }
    }


  });

  
}

module.exports = { createFormFunc };


  

