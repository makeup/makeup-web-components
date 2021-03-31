"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MakeupSwitchClass = require('makeup-switch-class');

var MakeupSwitchElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MakeupSwitchElement, _HTMLElement);

  var _super = _createSuper(MakeupSwitchElement);

  function MakeupSwitchElement() {
    var _this;

    _classCallCheck(this, MakeupSwitchElement);

    _this = _super.call(this);

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    var tmpl = document.createElement('template');
    tmpl.innerHTML = "\n<style>\n  .makeup-switch {\n    --switch-background-color-unchecked: #767676;\n    --switch-background-color-checked: #382aef;\n    --switch-background-color-disabled: #c7c7c7;\n    --switch-foreground-color: #fff;\n  }\n  @media (prefers-color-scheme: dark) {\n    .makeup-switch {\n      --switch-background-color-checked: #5192ff;\n    }\n  }\n  .makeup-switch {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 40px;\n    position: relative;\n    vertical-align: middle;\n  }\n  div.makeup-switch {\n    display: -webkit-box;\n    display: flex;\n  }\n  span.makeup-switch {\n    display: -webkit-inline-box;\n    display: inline-flex;\n  }\n  span.makeup-switch__button {\n    align-self: center;\n    background: gray none repeat scroll 0 0;\n    background-color: #767676;\n    background-color: var(--switch-background-color-unchecked, #767676);\n    border-radius: 400px;\n    color: transparent;\n    display: inline-block;\n    height: 24px;\n    position: relative;\n    text-indent: 100%;\n    -webkit-transition: left 0.15s ease-out 0s;\n    transition: left 0.15s ease-out 0s;\n    width: 40px;\n  }\n  span.makeup-switch__button::after {\n    background: white none repeat scroll 0 0;\n    background-color: #fff;\n    background-color: var(--switch-foreground-color, #fff);\n    border-radius: 50%;\n    content: \"\";\n    display: block;\n    height: 18px;\n    left: 3px;\n    position: absolute;\n    top: 3px;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transition: left 0.15s ease-out 0s;\n    transition: left 0.15s ease-out 0s;\n    width: 18px;\n  }\n  input.makeup-switch__control,\n  span.makeup-switch__control {\n    height: 24px;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 8px;\n    width: 40px;\n    z-index: 1;\n  }\n  input.makeup-switch__control {\n    opacity: 0;\n  }\n  input.makeup-switch__control:focus + span.makeup-switch__button {\n    outline: 1px dotted #767676;\n  }\n  input.makeup-switch__control[disabled] + span.makeup-switch__button {\n    background-color: #c7c7c7;\n    background-color: var(--switch-background-color-disabled, #c7c7c7);\n  }\n  input.makeup-switch__control:checked + span.makeup-switch__button::after {\n    left: 19px;\n  }\n  span.makeup-switch__control[aria-disabled=\"true\"] + span.makeup-switch__button {\n    background-color: #c7c7c7;\n    background-color: var(--switch-background-color-disabled, #c7c7c7);\n  }\n  span.makeup-switch__control[aria-checked=\"true\"] + span.makeup-switch__button::after {\n    left: 19px;\n  }\n  input.makeup-switch__control:not([disabled]):checked + span.makeup-switch__button,\n  span.makeup-switch__control:not([aria-disabled=\"true\"])[aria-checked=\"true\"] + span.makeup-switch__button {\n    background-color: #3665f3;\n    background-color: var(--switch-background-color-checked, #3665f3);\n  }\n  @media screen and (-ms-high-contrast: active) {\n    input.makeup-switch__control {\n      opacity: 1;\n    }\n  }\n</style>\n\n<span class=\"makeup-switch\">\n    <span class=\"makeup-switch__control\" role=\"switch\" tabindex=\"0\" aria-checked=\"false\"></span>\n    <span class=\"makeup-switch__button\"></span>\n</span>\n        ";
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
    _this.model = new MakeupSwitchClass(_this.shadowRoot.querySelector('.makeup-switch'), {
      customElementMode: true
    });
    return _this;
  }

  _createClass(MakeupSwitchElement, [{
    key: "connectedCallback",
    value: function connectedCallback(e) {
      this.removeAttribute('placeholder');

      this.model._observeEvents();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback(e) {
      this.model._destroy();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldVal, newVal) {
      switch (attr) {
        case 'checked':
          this.model.checked = newVal !== null;
          break;

        case 'disabled':
          this.model.disabled = newVal !== null;
          break;

        case 'label':
          this.model.label = newVal;
          break;

        case 'labelledby':
          this.model.labelledby = newVal;
          break;

        default:
          break;
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['checked', 'disabled', 'label', 'labelledby'];
    }
  }]);

  return MakeupSwitchElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('makeup-switch', MakeupSwitchElement);
