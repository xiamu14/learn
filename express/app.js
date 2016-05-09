var express = require('express');
var app = express();
 
app.get('/', function(req, res){
 
  res.send('hello world from csser.com!');
 
});
 
app.listen(4000);