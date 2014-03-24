var app = app || {};

(function() {
    var url = location.protocol + '//' + location.hostname + ':' + location.port;

    app.chat = function(id) {
        this.initialize(id);
    };

    app.chat.prototype.initialize = function(id) {
        this.context = $(id);
        this.sessionId = null;

        this.socket = io.connect(url);
        this.socket.on('connect', this.onSocketConnect.bind(this));

        this.chatInput = new app.chatInput(this.context.find('#chat-input'));
    };

    app.chat.prototype.onSocketConnect = function() {
        console.log(this.socket.socket.sessionid);
    };
} ());
