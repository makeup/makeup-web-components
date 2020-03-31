"use strict";

// requires NodeList.forEach polyfill for IE
require('nodelist-foreach-polyfill');

var MakeupSwitchClass = require('../../packages/makeup-switch-class');

window.onload = function (e) {
  document.querySelectorAll('.makeup-switch').forEach(function (el, i) {
    var widget = new MakeupSwitchClass(el);
    console.log(widget);
    el.addEventListener('makeup-switch-toggle', function (e) {
      console.log(e.type, e.detail);
    });
  });
};