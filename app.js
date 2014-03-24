var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);

    app.use(express.bodyParser());
});


server.listen(3333);