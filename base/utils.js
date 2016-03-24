var padZero = function(input, strlength) {
  var countZeros = strlength - String(input).length;

  if (countZeros <= 0) {
    return input;
  } else {
    var zeroString = '';
    for (var i = 0; i < countZeros; i++) {
      zeroString += '0';
    }
    return zeroString + input;
  }
}

module.exports = {
  padZero: padZero
}