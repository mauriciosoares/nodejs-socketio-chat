var app = app || {};

(function() {
  'use strict';

  var URL = location.protocol + '//' + location.hostname + ':' + location.port;

  app.chat = function(id) {
    this.initialize(id);
  };

  app.chat.prototype.initialize = function(id) {
    this.context = $(id);

    this.socket = new app.socketIo();
    this.socket.on('newMessage', this.addNewMessage.bind(this));

    // gets chat input and binds the enter event
    this.chatInput = new app.chatInput(this.context.find('#chat-input'));
    this.chatInput.on('enter', this.onChatEnter.bind(this));
  };

  app.chat.prototype.addNewMessage = function(event, text) {
    console.log(text);
  };

  app.chat.prototype.onChatEnter = function(event, text) {
    $.ajax({
      method: 'POST',
      url: URL + '/message',
      data: {
        text: text
      }
    });
  };
} ());
