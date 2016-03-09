var fs = require('fs');

var filePath = process.argv[2] ? process.argv[2] : '';

if (filePath === '') {
  console.error('Error. File path not procided.');
} else {
  var fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  console.log(fileContent.split('\n').length - 1);
}