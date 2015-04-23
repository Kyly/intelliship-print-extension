var self    = require('sdk/self');
var testUrl = 'file:///home/kyly/GDrive/Lojistic/Exstension/print_exstension/testhtml/TestIframePrint.html';
require("sdk/tabs").on("ready", logURL);

function logURL(tab) {
  if (tab.url == testUrl) {
    require("sdk/tabs").activeTab.attach({
      contentScript: 'window.alert("Page Matched");'
    });
  }
}

var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./intelliship-16.png",
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
      // TODO Test action
      contentScript: 'document.body.style.border = "5px solid red";'
    });
  }
});
