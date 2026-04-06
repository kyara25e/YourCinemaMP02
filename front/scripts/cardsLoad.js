const cardsLoad = (ele) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    const img = document.createElement("img");
    img.src = ele.poster;
    img.classList.add("cardImg");
    img.alt = ele.title;
    img.value = ele.id;
    img.background = ele.background;
    h1.innerHTML = ele.title;
    button.innerHTML = "Book Now";
    div.classList.add("card");
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(button);

    return div;
}

module.exports = {
    cardsLoad,
}