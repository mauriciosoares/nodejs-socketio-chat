var app = app || {};

(function() {
  'use strict';

  app.chatMessage = function(text, content) {
    this.initialize(text, content);
  };

  app.chatMessage.prototype.initialize = function(text, content) {
    this.chatList = content.find('.chat-list');
    this.el = $('<div>');
    this.text = text;

    return this;
  };

  app.chatMessage.prototype.render = function() {
    this.el.html(this.text);
    this.chatList.append(this.el)
  };
} ());
