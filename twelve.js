var http = require('http');
var map = require('through2-map')

var port = process.argv[2] ? process.argv[2] : '';
var file = process.argv[3] ? process.argv[3] : '';

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  if (req.method == 'POST') {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    return res.end('Invalid request method!');
  }
});

server.listen(Number(port));