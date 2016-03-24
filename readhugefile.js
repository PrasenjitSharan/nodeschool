var exception = require('./base/errors/exceptions');
var fs = require('fs');

var filePath = '/Users/ps/Downloads/c3f9948e-63bf-46cc-91b5-9bffd9b71157_1457607925_export/AddressInfo.json';
var newFile = '/Users/ps/Downloads/c3f9948e-63bf-46cc-91b5-9bffd9b71157_1457607925_export/AddressInfoUpdated.json';

try {
  if (filePath === '') {
    throw new exception.DefaultException('NoFilePathGiven');
  } else {
    var alldata = '';
    var importStream = fs.createReadStream(filePath, {flags: 'r', encoding: 'utf-8'});
    importStream.on('data', function(chunk) {
      alldata += chunk;
    });
    importStream.on('end', function(item) {
      alldata = JSON.parse(alldata);
      console.log(alldata.results.length);
    });

    // fs.readFile(filePath, { encoding: 'utf8' }, function(err, content) {
    //   if (err) throw new exception.DefaultException('InvalidFilePath');
    //   content = JSON.parse(content);
    //   console.log(content.results);
    //   var array = content.results;
    //   var resultArray = [];
    //   array.forEach(function(item) {
    //     if (item.company.objectId === 'JyvG9KyOLI') {
    //       resultArray.push(item);
    //     }
    //   });

    //   fs.writeFile (newFile, resultArray, function(err) {
    //       if (err) throw err;
    //       console.log('complete');
    //   });
    // })
  }
} catch (e) {
  console.error('Error > ' + e.message);
}