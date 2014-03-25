var app = app || {};

(function() {
  'use strict';

  var url = location.protocol + '//' + location.hostname + ':' + location.port;

  app.chat = function(id) {
    this.initialize(id);
  };

  app.chat.prototype.initialize = function(id) {
    this.context = $(id);
    this.sessionId = null;

    this.socket = io.connect(url);
    this.socket.on('connect', this.onSocketConnect.bind(this));

    // gets chat input and binds the enter event
    this.chatInput = new app.chatInput(this.context.find('#chat-input'));
    this.chatInput.on('enter', this.onChatEnter.bind(this));
  };

  app.chat.prototype.onSocketConnect = function() {
    this.sessionId = this.socket.socket.sessionid;
  };

  app.chat.prototype.onChatEnter = function(event, text) {
    console.log(text);
  }
} ());
