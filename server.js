/*eslint-disable no-console*/
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('I\'m the middleware between \'request\' and \'response\'!');
    next();
});

app.use(express.static('assets'));

app.get('/', function(req, res) {
    console.log('Received GET request on main site');
    res.sendFile('/index.html');
});

app.get('/userform', function(req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on http://' + host + ':' + port);
});
