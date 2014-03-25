var app = app || {};

(function() {
  'use strict';

  var URL = location.protocol + '//' + location.hostname + ':' + location.port;

  app.socketIo = function() {
    this.initialize();
  };

  app.socketIo.prototype.initialize = function() {
    this.socket = io.connect(URL);

    this.emitter = $({});
    this.on = this.emitter.on.bind(this.emitter);

    this.addSocketListeners();
  };

  app.socketIo.prototype.addSocketListeners = function() {
    this.socket.on('connect', this.onSocketConnect.bind(this));
    this.socket.on('incomingMessage', this.onSocketMessage.bind(this));
    this.socket.on('newConnection', this.onSocketNewConnection.bind(this));
  };

  app.socketIo.prototype.onSocketConnect = function() {
    this.sessionId = this.socket.socket.sessionid;

    console.log('Connected: ' + this.sessionId);

    this.socket.emit('newUser', {
      id: this.sessionId
    });
  };

  app.socketIo.prototype.onSocketMessage = function(data) {
    this.emitter.trigger('newMessage', data.message);
    // new app.chatMessage(data.message).render();
  };

  app.socketIo.prototype.onSocketNewConnection = function(data) {
    // console.log(data);
  };
} ());