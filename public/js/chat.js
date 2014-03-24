var app = app || {};

(function() {
    var url = location.protocol + '//' + location.hostname + ':' + location.port

    app.chat = function() {
        this.initialize();
    };

    app.chat.prototype.initialize = function() {
        var socket = io.connect(url);
    };
} ());