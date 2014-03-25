var app = app || {};

(function() {
  app.chatMessage = function(text) {
    this.initialize(text);
  };

  app.chatMessage.prototype.initialize = function(text) {
    this.el = $('<span>');
    this.text = text;

    return this;
  };

  app.chatMessage.prototype.render = function() {
    this.el.html(this.text);
    console.log(this.el.html());
  };
} ());
