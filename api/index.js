var tvApi = require('./tv_api');

// tvApi.getShowInfo(1, function(showInfo) {
//   for (var showKey in showInfo) console.log(showKey, ':', showInfo[showKey]);
// });

tvApi.getCastList(1, function(showInfo) {
  for (var showKey in showInfo) console.log(showKey, ':', showInfo[showKey]);
});
