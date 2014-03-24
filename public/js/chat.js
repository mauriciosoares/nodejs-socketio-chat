var app = app || {};

(function() {
    var url = location.protocol + '//' + location.hostname + ':' + location.port;

    app.chat = function(id) {
        this.initialize(id);
    };

    app.chat.prototype.initialize = function(id) {
        this.context = $(id);

        console.log(this.context);
        this.socket = io.connect(url);
    };
} ());