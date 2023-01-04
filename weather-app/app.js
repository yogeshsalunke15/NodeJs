const axios = require("axios");
const { getForecast, getGeocode } = require("./utils");

const WEATHERSTACK_ACCESS_KEY = "f96d3f54e5ba27359b8be4567d3f741f";
const POSITIONSTACK_ACCESS_KEY = "789fc525425e7c7a2d6914d89f3d92fc";
const WEATHER_BASE_URL = "http://api.weatherstack.com";
const POSITIONSTACK_BASE_URL = "http://api.positionstack.com";
const address = process.argv[2];
const geocodeOptions = {
  access_key: POSITIONSTACK_ACCESS_KEY,
  query: address,
};
const forecastOptions = {
  access_key: WEATHERSTACK_ACCESS_KEY,
  query: "",
};


if (!address) {
  console.log("Please provide address or city name to provide weather forecast !");
} else {
    // Get Geocode & Forecast data with the help of callback function
    getGeocode("get", "/v1/forward", POSITIONSTACK_BASE_URL, geocodeOptions, (geocodeData) => {
        forecastOptions.query = `${geocodeData.data[0].latitude} ${geocodeData.data[0].longitude}`;
        getForecast("get", "/current", WEATHER_BASE_URL, forecastOptions, (data) => {
            console.log("forecast data as below:::::::::::::", data);
        });
    });
}

//Execute like : node app.js  "Hyderabad,India"
