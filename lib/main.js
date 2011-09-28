// This is an active module of the bgnori Add-on


(function () {
    var d = new Date();
    console.log("===========================================================");
    console.log(" Starting main.js (", d, ")");
    console.log("-----------------------------------------------------------");
})();

var selection = require("selection");
var contextMenu = require("context-menu");
var clipboard = require("clipboard");

require("console-dir");


    
exports.main = function() {
    
    const data = require('self').data;
    
    require("widget").Widget({
        id: "About",
        label: "backgammonbase goodies",
        contentURL: data.url("icon.png"),
        onClick: function(event) {
            require("tabs").open("http://www.backgammonbase.com/");              
        }
    });

    var imageMenu = contextMenu.Item({
        label: "paste image URL",
          context:  contextMenu.SelectorContext('textarea'),
          contentScriptFile: [
              data.url("console-dir.js"),
              data.url("bgbase.js"),
              data.url("gnubgid.js"),
              data.url("xgid.js"),
              data.url("paste.js"),
              ],
        onMessage: function(evt){
            self.port.emit("click", 'paster as url');
          console.dir(evt); 
        },
    }); 

};

