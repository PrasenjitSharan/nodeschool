var exceptions = require('./base/errors/exceptions');
var fs = require('fs');
var path = require('path')

var dirPath = process.argv[2] ? process.argv[2] : '';
var extn = process.argv[3] ? process.argv[3] : '';

try {
  if (dirPath === '' || extn === '') {
    throw new exceptions.DefaultException('InvalidInput');
  } else {
    fs.readdir(dirPath, function(err, list) {
      if (err) throw err;
      // var validList = list.filter(function(value) {
      //   return value.split('.')[1] === extn;
      // })
      list.forEach(function(element) {
        if (path.extname(element) === '.' + extn) {
          console.log(element);
        }
      })
    })
  }
} catch (e) {
  console.error('Error: ' + e.toString());
}