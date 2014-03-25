var app = app || {};

(function() {
  'use strict';

  var URL = location.protocol + '//' + location.hostname + ':' + location.port;

  app.socketIo = function() {
    this.initialize();
  };

  app.socketIo.prototype.initialize = function() {
    this.socket = io.connect(URL);
    this.addSocketListeners();
  };

  app.socketIo.prototype.addSocketListeners = function() {
    this.socket.on('connect', this.onSocketConnect.bind(this));
    this.socket.on('incomingMessage', this.onSocketMessage.bind(this));
  };

  app.socketIo.prototype.onSocketConnect = function() {
    this.sessionId = this.socket.socket.sessionid;
  };

  app.socketIo.prototype.onSocketMessage = function(data) {
    console.log(data);
  };
} ());