var fs = require('fs');
var path = require('path')

var exceptions = require('./errors/exceptions');

var listFilesBasedOnExtn = function(dirPath, extn, callback) {
  var files = [];

  try {
    if (dirPath === '' || extn === '') {
      throw new exceptions.DefaultException('InvalidInput');
    } else {
      fs.readdir(dirPath, function(err, list) {
        if (err) {
          callback(err, null);
        } else {
          list.forEach(function(element) {
            if (path.extname(element) === '.' + extn) {
              files.push(element);
            }
          })
          callback(err, files);
        }
      });
    }
  } catch (e) {
    console.error('Error: ' + e.toString());
  }
}

module.exports = listFilesBasedOnExtn;