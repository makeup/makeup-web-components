// ../../node_modules/makeup-switch/dist/mjs/index.js
var defaultOptions = {
  bem: {
    control: "switch__control"
  },
  customElementMode: false
};
var src_default = class {
  constructor(el, selectedOptions) {
    this._options = Object.assign({}, defaultOptions, selectedOptions);
    this.el = el;
    this._onClickListener = _onClick.bind(this);
    this._onKeyDownListener = _onKeyDown.bind(this);
    this._onMutationListener = _onMutation.bind(this);
    if (this.disabled) {
      this._focusableElement.setAttribute("tabindex", "-1");
    }
    this.el.classList.add("switch--js");
    if (!this._options.customElementMode) {
      this._mutationObserver = new MutationObserver(this._onMutationListener);
      this._observeMutations();
      this._observeEvents();
    }
  }
  _observeMutations() {
    if (!this._options.customElementMode) {
      this._mutationObserver.observe(this._focusableElement, {
        attributes: true,
        childList: false,
        subtree: false
      });
    }
  }
  _unobserveMutations() {
    if (!this._options.customElementMode) {
      this._mutationObserver.disconnect();
    }
  }
  _observeEvents() {
    this._focusableElement.addEventListener("click", this._onClickListener);
    this._focusableElement.addEventListener("keydown", this._onKeyDownListener);
  }
  _unobserveEvents() {
    this._focusableElement.removeEventListener("click", this._onClickListener);
    this._focusableElement.removeEventListener("keydown", this._onKeyDownListener);
  }
  get _focusableElement() {
    return this.el.querySelector(`.${this._options.bem.control}`);
  }
  set checked(isChecked) {
    this._unobserveMutations();
    this._focusableElement.setAttribute("aria-checked", isChecked.toString());
    this.el.dispatchEvent(new CustomEvent("makeup-switch-toggle", {
      composed: true,
      detail: {
        on: this.checked
      }
    }));
    this._observeMutations();
  }
  get checked() {
    return this._focusableElement.getAttribute("aria-checked") === "true";
  }
  set disabled(isDisabled) {
    this._unobserveMutations();
    this._focusableElement.setAttribute("aria-disabled", isDisabled.toString());
    this._focusableElement.setAttribute("tabindex", isDisabled ? "-1" : "0");
    this._observeMutations();
  }
  get disabled() {
    return this._focusableElement.getAttribute("aria-disabled") === "true";
  }
  set labelledby(theId) {
    this._unobserveMutations();
    this._focusableElement.setAttribute("aria-labelledby", theId);
    if (this._options.customElementMode) {
      const labellingEl = document.getElementById(this.labelledby);
      if (labellingEl && labellingEl.innerText !== "") {
        this.label = labellingEl.innerText;
      }
    }
    this._observeMutations();
  }
  get labelledby() {
    return this._focusableElement.getAttribute("aria-labelledby");
  }
  get label() {
    return this._focusableElement.getAttribute("aria-label");
  }
  set label(theLabel) {
    this._unobserveMutations();
    this._focusableElement.setAttribute("aria-label", theLabel);
    this._observeMutations();
  }
  toggle() {
    this.checked = !this.checked;
  }
  destroy() {
    this._unobserveMutations();
    this._unobserveEvents();
    this._onClickListener = null;
    this._onKeyDownListener = null;
    this._onMutationListener = null;
  }
};
function _onKeyDown(e) {
  if (!this.disabled) {
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
}
function _onClick() {
  if (!this.disabled) {
    this.toggle();
  }
}
function _onMutation(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes") {
      this.el.dispatchEvent(new CustomEvent("makeup-switch-mutation", {
        detail: {
          attributeName: mutation.attributeName
        }
      }));
    }
  }
}

// src/style.js
var style_default = `
<style>
    .switch {
        --switch-background-color-unchecked: #767676;
        --switch-background-color-checked: #382aef;
        --switch-background-color-disabled: #c7c7c7;
        --switch-foreground-color: #fff;
        }
    @media (prefers-color-scheme: dark) {
        .switch {
            --switch-background-color-checked: #5192ff;
        }
    }
    .switch {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        height: 40px;
        position: relative;
        vertical-align: middle;
    }
    div.switch {
        display: -webkit-box;
        display: flex;
    }
    span.switch {
        display: -webkit-inline-box;
        display: inline-flex;
    }
    span.switch__button {
        align-self: center;
        background: gray none repeat scroll 0 0;
        background-color: #767676;
        background-color: var(--switch-background-color-unchecked, #767676);
        border-radius: 400px;
        color: transparent;
        display: inline-block;
        height: 24px;
        position: relative;
        text-indent: 100%;
        -webkit-transition: left 0.15s ease-out 0s;
        transition: left 0.15s ease-out 0s;
        width: 40px;
    }
    span.switch__button::after {
        background: white none repeat scroll 0 0;
        background-color: #fff;
        background-color: var(--switch-foreground-color, #fff);
        border-radius: 50%;
        content: "";
        display: block;
        height: 18px;
        left: 3px;
        position: absolute;
        top: 3px;
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
        -webkit-transition: left 0.15s ease-out 0s;
        transition: left 0.15s ease-out 0s;
        width: 18px;
    }
    input.switch__control,
        span.switch__control {
        height: 24px;
        left: 0;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 8px;
        width: 40px;
        z-index: 1;
    }
    input.switch__control {
        opacity: 0;
    }
    input.switch__control:focus + span.switch__button {
        outline: 1px dotted #767676;
    }
    input.switch__control[disabled] + span.switch__button {
        background-color: #c7c7c7;
        background-color: var(--switch-background-color-disabled, #c7c7c7);
    }
    input.switch__control:checked + span.switch__button::after {
        left: 19px;
    }
    span.switch__control[aria-disabled="true"] + span.switch__button {
        background-color: #c7c7c7;
        background-color: var(--switch-background-color-disabled, #c7c7c7);
    }
    span.switch__control[aria-checked="true"] + span.switch__button::after {
        left: 19px;
    }
    input.switch__control:not([disabled]):checked + span.switch__button,
    span.switch__control:not([aria-disabled="true"])[aria-checked="true"] + span.switch__button {
        background-color: #3665f3;
        background-color: var(--switch-background-color-checked, #3665f3);
    }
    @media screen and (-ms-high-contrast: active) {
        input.switch__control {
            opacity: 1;
        }
    }
</style>
`;

// src/template.js
var template_default = `
    <span class="switch">
        <span class="switch__control" role="switch" tabindex="0" aria-checked="false"></span>
        <span class="switch__button"></span>
    </span>
`;

// src/index.js
var MakeupSwitchElement = class extends HTMLElement {
  static get observedAttributes() {
    return [
      "checked",
      "disabled",
      "label",
      "labelledby"
    ];
  }
  connectedCallback(e) {
    this.removeAttribute("skeleton");
    this.model._observeEvents();
  }
  disconnectedCallback(e) {
    this.model._destroy();
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "checked":
        this.model.checked = newVal !== null;
        break;
      case "disabled":
        this.model.disabled = newVal !== null;
        break;
      case "label":
        this.model.label = newVal;
        break;
      case "labelledby":
        this.model.labelledby = newVal;
        break;
      default:
        break;
    }
  }
  constructor() {
    super();
    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: "open" });
      const tmpl = document.createElement("template");
      tmpl.innerHTML = `
  ${style_default}                
  ${template_default}
            `;
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    this.model = new src_default(this.shadowRoot.querySelector(".switch"), {
      customElementMode: true
    });
  }
};
window.customElements.define("makeup-switch", MakeupSwitchElement);
