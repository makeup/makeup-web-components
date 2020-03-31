const MakeupSwitchClass = require('../../packages/makeup-switch-class');

window.onload = function(e) {
    document.querySelectorAll('.makeup-switch').forEach(function(e, i) {
        const widget = new MakeupSwitchClass(e);
        console.log(widget);
    });
};
