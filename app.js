// Guide reference for some things
// https://github.com/wmora/nodejs-express-socketio-chatroom/blob/master/server.js

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);

    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
    res.render('index.ejs');
});

server.listen(3333);