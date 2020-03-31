"use strict";

var MakeupSwitchElement = require('../../packages/makeup-switch-element');

window.onload = function (e) {
  document.querySelectorAll('makeup-switch').forEach(function (e, i) {
    console.log(e, i);
  });
};