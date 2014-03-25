var app = app || {};

(function() {
  'use strict';

  app.users = function(content) {
    this.initialize(content);
  };

  app.users.prototype.initialize = function(content) {
    this.usersList = content;

    return this;
  }

  app.users.prototype.render = function(users) {
    $.each(users, function(i, e) {
      console.log(e);
    }.bind(this));
  };
} ());