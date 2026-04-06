function fetchData(movies) {
  const container = document.querySelector("#cardsContainer");

  container.innerHTML = "";

  movies.forEach(movie => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-lg">
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${movie.title}</h5>
            <p>${movie.director}</p>
            <span>${movie.year}</span>
          </div>
        </div>
      </div>
    `;
  });
}

module.exports = { fetchData };
