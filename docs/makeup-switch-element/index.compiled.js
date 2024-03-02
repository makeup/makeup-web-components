"use strict";

var _makeupSwitchElement = _interopRequireDefault(require("../../packages/makeup-switch-element"));
require("../../packages/makeup-switch-element/src/index.css");
require("../../packages/makeup-switch-element/src/skeleton.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
window.onload = function () {
  document.querySelectorAll('makeup-switch').forEach(function (el, i) {
    console.log(el, i);
    el.addEventListener('makeup-switch-toggle', function (e) {
      console.log(e.type, e.detail);
    });
  });
};