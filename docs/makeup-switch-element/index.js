// requires NodeList.forEach polyfill for IE
require('nodelist-foreach-polyfill');

const MakeupSwitchElement = require('../../packages/makeup-switch-element');

window.onload = function(e) {
    document.querySelectorAll('makeup-switch').forEach(function(el, i) {
        console.log(el, i);
    });
};
