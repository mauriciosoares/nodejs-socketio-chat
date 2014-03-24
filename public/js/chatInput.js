var app = app || {};

(function() {
    app.chatInput = function(context) {
        this.initialize(context);
    };

    app.chatInput.prototype.initialize = function(context) {
        this.context = context;
        console.log(this.context);
    };
} ());
