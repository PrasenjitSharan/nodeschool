var fs = require('fs');
var path = require('path')

var listFiles = require('./base/listFiles');

var dirPath = process.argv[2] ? process.argv[2] : '';
var extn = process.argv[3] ? process.argv[3] : '';

listFiles(dirPath, extn, function(err, list) {
  if (err) return err;
  list.forEach(function(item) {
    console.log(item);
  })
});