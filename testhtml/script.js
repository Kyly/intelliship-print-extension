var printer;
var frameIndex = 0;

function printFrames() {
    printer = setInterval(printerAction, 1000);
}

/**
 * Handles printing a single frame
 */
function printerAction() {
    printFrame({
        silent  : true,
        printer : 'CUPS/PDF',
        frame   : window.frames[frameIndex]
    });
    console.log(window.frames[frameIndex]);
    console.log(frameIndex++);
    if ( frameIndex > window.frames.length - 1)
        clearInterval(printer);
}

/**
 * Handles printing from a given printer.
 *
 * @param data = {printer: String, frame: String, silent: Boolean}
 */
function printFrame(data) {
   jsPrintSetup.setPrinter(data.printer);
   // sets print progress object
  //  jsPrintSetup.setPrintProgressListener(progressListener);
   // sets silent printing
   jsPrintSetup.setSilentPrint(data.silent);
   jsPrintSetup.printWindow(data.frame);
   // restore silent printing
   jsPrintSetup.setSilentPrint(!data.silent);
}
