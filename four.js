var exception = require('./base/errors/exceptions');
var fs = require('fs');

// var filePath = process.argv[2] ? process.argv[2] : '';
var filePath = 'abc';

try {
  if (filePath === '') {
    throw new exception.DefaultException('NoFilePathGiven');
  } else {
    fs.readFile(filePath, { encoding: 'utf8' }, function(err, content) {
      if (err) throw new exception.DefaultException('InvalidFilePath');;
      console.log(content.split('\n').length - 1);
    })
  }
} catch (e) {
  console.error('Error > ' + e.message);
}