var request = require('request');

var url =
  'https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=a0bd32a2272e9fedce8cef117e21f78a';

request(url, function(error, response, body) {
  if (error) {
    console.log('Error: ', error);
  }

  console.log(JSON.parse(body));
});
