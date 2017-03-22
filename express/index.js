var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('short'));
app.get('/', function(req, res, next){
    res.send('hello world!');
});
app.listen(8080);