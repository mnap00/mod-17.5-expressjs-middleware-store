/*eslint-disable no-console*/
var express = require('express');
var app = express();

app.use(express.static('assets'));

app.use('/store', function(req, res, next) {
    console.log('I\'m the middleware for \'/store\' request');
    next();
});

app.get('/', function(req, res) {
    console.log('Received GET request on main site');
    res.sendFile(__dirname + '/assets/form.html');
});

app.get('/userform', function(req, res) {
    console.log('Received GET request on form');
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.get('/store', function(req, res) {
    console.log('Received GET request on store');
    res.send('This is store');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on http://' + host + ':' + port);
});
app.use(function (req, res, next) {
    res.status(404).send('Sorry, cannot find requested site');
});
