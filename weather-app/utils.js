const axios = require("axios");

const getForecast = (method, url, baseURL, option, callBack) => {
  axios({
    method,
    url,
    baseURL,
    params: option,
    responseType: "json",
  })
    .then((resp) => {
      callBack(resp.data);
    })
    .catch((error) => {
      console.log("Error -->", error);
    });
};

//object shorthand syntax used for Axios
const getGeocode = (method, url, baseURL, option, callBack) => {
  axios({
    method,
    url,
    baseURL,
    params: option,
    responseType: "json",
  })
    .then((resp) => {
      callBack(resp.data);
    })
    .catch((error) => {
      console.log("Error -->", error);
    });
};

module.exports = {
  getForecast,
  getGeocode,
};
