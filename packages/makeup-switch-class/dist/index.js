'use strict'; // requires CustomEvent polyfill for IE
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomEvent = require('custom-event');

var defaultOptions = {
  bem: {
    control: '.makeup-switch__control'
  },
  customElementMode: false
};

module.exports = /*#__PURE__*/function () {
  function _class(el, selectedOptions) {
    _classCallCheck(this, _class);

    this.options = _extends({}, defaultOptions, selectedOptions);
    this.el = el;
    this._onClickListener = this._onClick.bind(this);
    this._onKeyDownListener = this._onKeyDown.bind(this);

    if (!this.options.customElementMode) {
      this._mutationObserver = new MutationObserver(this._onMutation);

      this._observeMutations();

      this._observeEvents();
    }
  }

  _createClass(_class, [{
    key: "_observeMutations",
    value: function _observeMutations() {
      if (!this.options.customElementMode) {
        this._mutationObserver.observe(this._focusableElement, {
          attributes: true,
          childList: false,
          subtree: false
        });
      }
    }
  }, {
    key: "_unobserveMutations",
    value: function _unobserveMutations() {
      if (!this.options.customElementMode) {
        this._mutationObserver.disconnect();
      }
    }
  }, {
    key: "_observeEvents",
    value: function _observeEvents() {
      this._focusableElement.addEventListener('click', this._onClickListener);

      this._focusableElement.addEventListener('keydown', this._onKeyDownListener);
    }
  }, {
    key: "_unobserveEvents",
    value: function _unobserveEvents() {
      this._focusableElement.removeEventListener('click', this._onClickListener);

      this._focusableElement.removeEventListener('keydown', this._onKeyDownListener);
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      switch (e.keyCode) {
        case 32:
          e.preventDefault();
          this.toggle();
          break;

        case 37:
          this.checked = false;
          break;

        case 39:
          this.checked = true;
          break;

        default:
          break;
      }
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      this.toggle();
    }
  }, {
    key: "_onMutation",
    value: function _onMutation(mutationsList, observer) {
      var _iterator = _createForOfIteratorHelper(mutationsList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'attributes') {// console.log(mutation);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.el.dispatchEvent(new CustomEvent('makeup-switch-toggle', {
          detail: {
            value: this.checked ? 'on' : 'off'
          }
        }));
      }
    }
  }, {
    key: "_focusableElement",
    get: function get() {
      return this.el.querySelector(this.options.bem.control);
    }
  }, {
    key: "checked",
    set: function set(isChecked) {
      this._unobserveMutations();

      this._focusableElement.setAttribute('aria-checked', isChecked.toString());

      this._observeMutations();
    },
    get: function get() {
      return this._focusableElement.getAttribute('aria-checked') === 'true';
    }
  }, {
    key: "disabled",
    set: function set(isDisabled) {
      this._unobserveMutations();

      this._focusableElement.setAttribute('aria-disabled', isDisabled.toString());

      this._focusableElement.setAttribute('tabindex', isDisabled ? '-1' : '0');

      this._observeMutations();
    },
    get: function get() {
      return this._focusableElement.getAttribute('aria-disabled') === 'true';
    }
  }, {
    key: "labelledby",
    set: function set(theId) {
      this._unobserveMutations();

      this._focusableElement.setAttribute('aria-labelledby', theId);

      this._observeMutations();
    }
  }]);

  return _class;
}();
