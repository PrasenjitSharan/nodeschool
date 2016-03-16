var http = require('http');

var url = process.argv[2] ? process.argv[2] : '';

http.get(url, function(res) {
  var data = ''
  res.setEncoding('utf8');

  res.on('data', function(chunk) {
    data += chunk;
  });

  res.on('end', function() {
    console.log(data.length);
    console.log(data);
  });

  res.on('error', function(e) {
    console.log('problem with response: ' + e.message);
  });
})