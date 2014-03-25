var app = app || {};

(function() {
  'use strict';

  app.users = function(content) {
    this.initialize(content);
  };

  app.users.prototype.initialize = function(content) {
    this.usersList = content;

    console.log(this.usersList);
  }
} ());