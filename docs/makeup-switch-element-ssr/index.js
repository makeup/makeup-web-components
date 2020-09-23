// requires NodeList.forEach polyfill for IE
require('nodelist-foreach-polyfill');

const MakeupSwitchElementSSR = require('../../packages/makeup-switch-element-ssr');

window.onload = function() {
    document.querySelectorAll('makeup-switch-ssr').forEach(function(el, i) {
        console.log(el, i);

        el.addEventListener('makeup-switch-toggle', function(e) {
            console.log(e.type, e.detail);
        });
    });
};
