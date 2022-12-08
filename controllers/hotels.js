const axios = require('axios')
const Hotels = require("../models/hotels");

module.exports = {
    getHotels: async (req, res) => {
        
  
// Make request
const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
    headers: {
      'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
    }}