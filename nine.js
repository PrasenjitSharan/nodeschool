var http = require('http');

var url1 = process.argv[2] ? process.argv[2] : '';
var url2 = process.argv[3] ? process.argv[3] : '';
var url3 = process.argv[4] ? process.argv[4] : '';
var content = '';

var getHTTP = function(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(res) {
      var data = '';

      res.setEncoding('utf8');

      res.on('data', function(chunk) {
        data += chunk;
      });

      res.on('end', function() {
        resolve(data);
      });

      res.on('error', function() {
        reject('Error!');
      });
    });
  });
};

getHTTP(url1).then(function(result) {
  console.log(result);
  return getHTTP(url2);
}).then(function(result) {
  console.log(result);
  return getHTTP(url3);
}).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.error(error);
});