import $ from 'jquery';

var token = "477bc44abcdd391a8a554c665292dff0";
var url = 'https://api.soundcloud.com/tracks?client_id=' + token + '&limit=8&q=';


$.getJSON(url).then( function (res) {}
