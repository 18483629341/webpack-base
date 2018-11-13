// Greeter.js
var context = require("./config.json");
module.exports = function() {
    var greeter = document.createElement('div');
    // greeter.textContent = "Hi there and greetings!";
    greeter.textContent = context.contentText;
    return greeter;
};