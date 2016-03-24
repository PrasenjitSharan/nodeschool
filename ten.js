var net = require('net');
var utils = require('./base/utils');

var port = process.argv[2] ? process.argv[2] : '';

var server = net.createServer(function(socket) {
  var date = new Date();
  var formattedDate = null;

  formattedDate = date.getFullYear() + '-' +
    utils.padZero((Number(date.getMonth()) + 1), 2) + '-' +
    utils.padZero(date.getDate(), 2) + ' ' +
    utils.padZero(date.getHours(), 2) + ':' +
    utils.padZero(date.getMinutes(), 2);

  socket.write(formattedDate);
  socket.write('\n');
  socket.end();
});

server.listen(port);