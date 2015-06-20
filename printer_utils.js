/**
 * Created by kyly on 6/18/15.
 */

function Printer (options) {
  this.printerName = options.printerName;
  this.worker      = options.worker;
  this.silent      = options.silent;
  this.delay       = options.delay;
  this.frameIndex   = 0;
  this.printer;
}

Printer.prototype.printFrames = function () {
  var _this = this;
  this.printer = setInterval(_this.print, this.delay);
}

/**
 * Handles printing a single frame
 */
Printer.prototype.print = function () {
  this.worker.port.emit('print frame',
    {
      silent      : this.silent,
      printerName : this.printerName,
      frameIndex  : this.frameIndex
    }
  );
  console.log(frameIndex++);
  if ( frameIndex > window.frames.length - 1)
    this.clearPrintJob();
};

Printer.prototype.clearPrintJob = function() {
  this.frameIndex = 0;
  clearInterval(this.printer);
};

exports.Printer = Printer;