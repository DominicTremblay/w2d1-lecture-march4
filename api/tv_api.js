var request = require('request');

var getReqUrl = function(showId, option) {
  var options = {
    cast: '/cast',
    seasons: '/seasons',
    episodes: '/episodes',
  };

  var url = 'http://api.tvmaze.com/shows/' + showId;

  if (option) {
    url += options[option];
  }
  return url;
};

var sendRequest = function(url, callback) {
  request(url, function(error, response, body) {
    if (!error && response && response.statusCode === 200) {
      callback(JSON.parse(body));
    } else {
      console.log('Error: ', error);
    }
  });
};

var getShowInfo = function(showId, callback) {
  sendRequest(getReqUrl(showId), callback);
};

var getCastList = function(showId, callback) {
  sendRequest(getReqUrl(showId, 'cast'), callback);
};

getShowInfo(1, function(showInfo) {
  console.log(showInfo);
});

module.exports = {
  getCastList,
  getShowInfo,
};
