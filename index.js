var { ToggleButton } = require('sdk/ui/button/toggle');
var { setInterval, clearInterval } = require("sdk/timers");

var panels    = require("sdk/panel");
var self      = require("sdk/self");
var prefs     = require("sdk/simple-prefs").prefs;
var tabs      = require("sdk/tabs");

var frameIndex = 0;
var framesCount;
var worker;
var printer;

// Call print job
tabs.on("ready", logURL);

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: "./intelliship-16.png",
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel/panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

function logURL(tab) {
  console.log('logUrl has been called');
  if (tab.url == prefs.targetURL) {
    worker = tabs.activeTab.attach({
      contentScript: [
        "self.port.on('print frame', function(data) {" +
        "jsPrintSetup.setPrinter(data.printerName);" +
        "jsPrintSetup.setSilentPrint(data.silent);" +
        "jsPrintSetup.printWindow(window.frames[data.frameIndex]);" +
        "jsPrintSetup.setSilentPrint(!data.silent);});",
        "self.port.emit('frames count', window.frames.length);",
        "self.port.on('debug', function (msg) {window.alert(msg)});"
      ]
    });

    worker.port.once('frames count', function (count) {
      framesCount = count;
      printFrames();
    });
  }
}


function printFrames() {
  var _this = this;
  printer = setInterval(_this.print, prefs.delay);
}

/**
 * Handles printing a single frame
 */
function print() {
  worker.port.emit('print frame',
    {
      silent      : prefs.silent,
      printerName : prefs.printerName,
      frameIndex  : frameIndex
    }
  );

  frameIndex++;
  if ( frameIndex > framesCount - 1) {
    frameIndex = 0;
    clearInterval(printer);
  }
}
