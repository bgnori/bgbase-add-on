// paste.js - bgnori's module
// author: bgnori



require("console-dir");

var my = {};

(function (my){
    var bgbase = require("bgbase");
    var gnubgid = require("gnubgid");
    var xgid = require("xgid");

    function getGnubgID(){
        let contents = clipboard.get("text");
        console.log('in clipboard:', contents);
        let found = gnubgid.find(contents);
        console.log('addon found:', found);
        return found;
    };
    
    function insertText(element, snippet){
      // https://developer.mozilla.org/ja/Code_snippets/Miscellaneous#.E3.82.AB.E3.83.BC.E3.82.BD.E3.83.AB.E3.81.AE.E4.BD.8D.E7.BD.AE.E3.81.AB.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.92.E6.8C.BF.E5.85.A5.E3.81.99.E3.82.8B
      var selectionEnd = element.selectionStart + snippet.length;
      var currentValue = element.value;

      var beforeText = currentValue.substring(0, element.selectionStart);
      var afterText = currentValue.substring(element.selectionEnd, currentValue.length);
    
      element.value = beforeText + snippet + afterText;
      element.focus();

//??????????????????
      element.setSelectionRange(selectionEnd, selectionEnd);
    };
})(my);


$(window).port.on("click", function (event) {
    let found = getGnubgID();
    if (found){
        let url =  bgbase.imageURL(found, 300, 400, 'nature');)
        insertText(node, url);
    };
});

