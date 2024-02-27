"use strict";

const MakeupSwitch = require('makeup-switch').default;
class MakeupSwitchElement extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'disabled', 'label', 'labelledby'];
  }
  connectedCallback(e) {
    this.removeAttribute('placeholder');
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
    if (this.shadowRoot) {
      console.log('shadowRoot exists');
    } else {
      const shadowRoot = this.attachShadow({
        mode: 'open'
      });
      const tmpl = document.createElement('template');
      tmpl.innerHTML = "\n  <style>\n    .switch {\n      --switch-background-color-unchecked: #767676;\n      --switch-background-color-checked: #382aef;\n      --switch-background-color-disabled: #c7c7c7;\n      --switch-foreground-color: #fff;\n    }\n    @media (prefers-color-scheme: dark) {\n      .switch {\n        --switch-background-color-checked: #5192ff;\n      }\n    }\n    .switch {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 40px;\n      position: relative;\n      vertical-align: middle;\n    }\n    div.switch {\n      display: -webkit-box;\n      display: flex;\n    }\n    span.switch {\n      display: -webkit-inline-box;\n      display: inline-flex;\n    }\n    span.switch__button {\n      align-self: center;\n      background: gray none repeat scroll 0 0;\n      background-color: #767676;\n      background-color: var(--switch-background-color-unchecked, #767676);\n      border-radius: 400px;\n      color: transparent;\n      display: inline-block;\n      height: 24px;\n      position: relative;\n      text-indent: 100%;\n      -webkit-transition: left 0.15s ease-out 0s;\n      transition: left 0.15s ease-out 0s;\n      width: 40px;\n    }\n    span.switch__button::after {\n      background: white none repeat scroll 0 0;\n      background-color: #fff;\n      background-color: var(--switch-foreground-color, #fff);\n      border-radius: 50%;\n      content: \"\";\n      display: block;\n      height: 18px;\n      left: 3px;\n      position: absolute;\n      top: 3px;\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      -webkit-transition: left 0.15s ease-out 0s;\n      transition: left 0.15s ease-out 0s;\n      width: 18px;\n    }\n    input.switch__control,\n    span.switch__control {\n      height: 24px;\n      left: 0;\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      top: 8px;\n      width: 40px;\n      z-index: 1;\n    }\n    input.switch__control {\n      opacity: 0;\n    }\n    input.switch__control:focus + span.switch__button {\n      outline: 1px dotted #767676;\n    }\n    input.switch__control[disabled] + span.switch__button {\n      background-color: #c7c7c7;\n      background-color: var(--switch-background-color-disabled, #c7c7c7);\n    }\n    input.switch__control:checked + span.switch__button::after {\n      left: 19px;\n    }\n    span.switch__control[aria-disabled=\"true\"] + span.switch__button {\n      background-color: #c7c7c7;\n      background-color: var(--switch-background-color-disabled, #c7c7c7);\n    }\n    span.switch__control[aria-checked=\"true\"] + span.switch__button::after {\n      left: 19px;\n    }\n    input.switch__control:not([disabled]):checked + span.switch__button,\n    span.switch__control:not([aria-disabled=\"true\"])[aria-checked=\"true\"] + span.switch__button {\n      background-color: #3665f3;\n      background-color: var(--switch-background-color-checked, #3665f3);\n    }\n    @media screen and (-ms-high-contrast: active) {\n      input.switch__control {\n        opacity: 1;\n      }\n    }\n  </style>\n\n  <span class=\"switch\">\n      <span class=\"switch__control\" role=\"switch\" tabindex=\"0\" aria-checked=\"false\"></span>\n      <span class=\"switch__button\"></span>\n  </span>\n            ";
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    this.model = new MakeupSwitch(this.shadowRoot.querySelector('.switch'), {
      customElementMode: true
    });
  }
}
window.customElements.define('makeup-switch', MakeupSwitchElement);
