var app = app || {};

(function() {
  'use strict';

  var URL = location.protocol + '//' + location.hostname + ':' + location.port;

  app.chat = function(id) {
    this.initialize(id);
  };

  app.chat.prototype.initialize = function(id) {
    this.context = $(id);
    this.sessionId = null;

    new app.socketIo();

    // gets chat input and binds the enter event
    this.chatInput = new app.chatInput(this.context.find('#chat-input'));
    this.chatInput.on('enter', this.onChatEnter.bind(this));
  };

  app.chat.prototype.onChatEnter = function(event, text) {
    // console.log(this);
    $.ajax({
      method: 'POST',
      url: URL + '/message',
      data: {
        id: this.sessionId,
        text: text
      }
    });
  };
} ());
