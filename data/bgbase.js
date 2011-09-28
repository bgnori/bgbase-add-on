// bgbase.js - bgnori's module
// author: bgnori

var bgbase = {};

bgbase.imageURL = function (gnubgid, height, width, css){
    //return 'http://image.backgammonbase.com/image?' + 
    return 'http://127.0.0.1:8000/image?' +     
      'gnubgid=' +  encodeURIComponent(gnubgid) + 
      '&height='+height +
      '&width='+width + 
      '&css='+ css +
      '&format=png';
};

