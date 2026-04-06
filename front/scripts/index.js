const { fetchData } = require("./fetchData.js");
const { failData } = require("./failData.js");
const { createFormFunc } = require("./CreateMovie.js");
const axios = require("axios");

const getData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    console.log("DATA GET ", data);
    fetchData(data);
  } catch (error) {
    console.error(error);
    failData();
  }
};

if (document.querySelector("#cardsContainer")) {
  getData();
}

if (document.querySelector("#form")) {
  createFormFunc();
}

