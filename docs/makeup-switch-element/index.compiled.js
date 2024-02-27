"use strict";

const MakeupSwitchElement = require('../../packages/makeup-switch-element');
window.onload = function () {
  document.querySelectorAll('makeup-switch').forEach(function (el, i) {
    console.log(el, i);
    el.addEventListener('makeup-switch-toggle', function (e) {
      console.log(e.type, e.detail);
    });
  });
};