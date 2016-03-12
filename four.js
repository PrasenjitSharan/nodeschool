var exceptions = require('./base/errors/exceptions');
var fs = require('fs');

var filePath = process.argv[2] ? process.argv[2] : '';

try {
  if (filePath === '') {
    throw new exceptions.DefaultException('InvalidFilePath');
  } else {
    fs.readFile(filePath, { encoding: 'utf8' }, function(err, content) {
      if (err) throw err;
      console.log(content.split('\n').length - 1);
    })
  }
} catch (e) {
  console.error('Error: ' + e.toString());
}