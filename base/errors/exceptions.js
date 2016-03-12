var DefaultException = function (message) {
  this.message = message;
  this.name = 'DefaultException';
  this.toString = function () {
    return this.name + ' > ' + this.message;
  }
}

module.exports = {
  DefaultException: DefaultException
};