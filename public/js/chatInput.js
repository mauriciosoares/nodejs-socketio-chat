var app = app || {};

(function() {
  'use strict';

  var ENTER_KEY = 13;

  app.chatInput = function(context) {
    this.initialize(context);
  };

  app.chatInput.prototype.initialize = function(context) {
    this.context = context;
    this.emitter = $({});

    this.on = this.emitter.on.bind(this.emitter);

    this.addEventListeners();
  };

  app.chatInput.prototype.addEventListeners = function() {
    this.context.on('keydown', this.onKeyDown.bind(this));
  };

  app.chatInput.prototype.onKeyDown = function(event) {
    if(event.which !== 13) {
      return;
    }

    var text = event.target.value;

    event.target.value = '';

    if(!$.trim(text)) {
      return;
    }

    this.emitter.trigger('enter', text);
  };
} ());
