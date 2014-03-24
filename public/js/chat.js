var app = app || {};

(function() {
    app.chat = function() {
        this.initialize();
    };

    app.chat.prototype.initialize = function() {
        console.log('initing');
    };
} ());