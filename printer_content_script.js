"self.port.on('print frame', function(data) {" +
  "jsPrintSetup.setPrinter('CUPS/PDF');" +
  "jsPrintSetup.setSilentPrint(data.silent);"+
  "jsPrintSetup.printWindow(window.frames[0]);"+
  "jsPrintSetup.setSilentPrint(!data.silent);" +
"});"
