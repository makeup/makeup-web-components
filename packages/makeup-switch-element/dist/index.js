"use strict";

var _makeupSwitch = _interopRequireDefault(require("makeup-switch"));
var _style = _interopRequireDefault(require("./style.js"));
var _template = _interopRequireDefault(require("./template.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeupSwitchElement extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'disabled', 'label', 'labelledby'];
  }
  connectedCallback(e) {
    this.removeAttribute('skeleton');
    this.model._observeEvents();
  }
  disconnectedCallback(e) {
    this.model._destroy();
  }
  attributeChangedCallback(attr, oldVal, newVal) {
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
  constructor() {
    super();
    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({
        mode: 'open'
      });
      const tmpl = document.createElement('template');
      tmpl.innerHTML = "\n  ".concat(_style.default, "                \n  ").concat(_template.default, "\n            ");
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    this.model = new _makeupSwitch.default(this.shadowRoot.querySelector('.switch'), {
      customElementMode: true
    });
  }
}
window.customElements.define('makeup-switch', MakeupSwitchElement);