// gnubgid.js - bgnori's module
// author: bgnori


console.log("init gnubgid module");
var gnubgid = {};

(function (g){
        g.pattern = {
        CR: "\\n",
        LF: "\\r",
        CRLF: "(\\r\\n)",
        BASE64: '[A-Za-z0-9/+]',
        'float': "(?:[+-]?\\d+\\.\\d+)"
    };
    g.pattern.Line = '(?:' + g.pattern.CRLF + '|' + g.pattern.CR + '|' + g.pattern.LF + ')';

    g.re = {
        postionID: new RegExp("Position ID: (" + exports.pattern.BASE64 + "{14})"),
        matchID: new RegExp("Match ID: (" + exports.pattern.BASE64 + "{12})"),
        gnubgID: new RegExp(exports.pattern.BASE64 + "{14}:" + exports.pattern.BASE64 +"{12}")
      };


    g.find = function(t){
        var pos;
        var match;
        var e;
        if (t) {
            try{
                pos = t.match($.re.postionID)[1];
                match = t.match($.re.matchID)[1];
                if ( pos && match ){
                    return pos + ':' + match;
                };
            }catch(e){
                //surpress error try other.
            };
            try{
                var gnubgid = t.match($.re.gnubgID);
                if (gnubgid){
                    return gnubgid;
                };
             }catch(e){
                //surpress error and use default value
            };
        };
        return null;
    };
})(gnubgid);

