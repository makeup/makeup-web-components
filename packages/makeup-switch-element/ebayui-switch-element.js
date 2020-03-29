class EbayUISwitchElement extends HTMLElement {

    static get observedAttributes() {
        return [
            'checked',
            'disabled',
            'labelledby'
        ];
    }

    constructor() {
        super();

        this._onClickListener = this._onClick.bind(this);
        this._onKeyDownListener = this._onKeyDown.bind(this);

        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.innerHTML = `
          <style>
              .switch {
                display: inline-flex;
                height: 40px;
                position: relative;
                vertical-align: middle;
              }
              .switch__button {
                align-self: center;
                background: gray none repeat scroll 0 0;
                background-color: #767676;
                border-radius: 400px;
                color: transparent;
                display: inline-block;
                height: 24px;
                position: relative;
                text-indent: 100%;
                transition: left 0.15s ease-out 0s;
                width: 40px;
              }
              .switch__button::after {
                background: white none repeat scroll 0 0;
                background-color: #fff;
                border-radius: 50%;
                content: "";
                display: block;
                height: 18px;
                left: 3px;
                position: absolute;
                top: 3px;
                transform: translate3d(0, 0, 0);
                transition: left 0.15s ease-out 0s;
                width: 18px;
              }
              .switch__control {
                height: 24px;
                left: 0;
                margin: 0;
                opacity: 0;
                padding: 0;
                position: absolute;
                top: 8px;
                width: 40px;
                z-index: 1;
              }
              .switch__control:focus + .switch__button {
                outline: 1px dotted #767676;
              }
              .switch__control[aria-disabled="true"] + .switch__button {
                background-color: #c7c7c7;
              }
              .switch__control[aria-checked="true"] + .switch__button::after {
                left: 19px;
              }
              .switch__control:not([aria-disabled="true"])[aria-checked="true"] + .switch__button {
                background-color: #3665f3;
              }
          </style>

          <span class="switch">
            <span class="switch__control" role="switch" tabindex="0" aria-checked="false"></span>
            <span class="switch__button"></span>
          </span>
        `;
    }

    get _focusableElement() {
        return this.shadowRoot.querySelector('.switch__control');
    }

    set checked(isChecked) {
        this._focusableElement.setAttribute('aria-checked', isChecked.toString());
    }

    get checked() {
        return this._focusableElement.getAttribute('aria-checked') === 'true';
    }

    set disabled(isDisabled) {
        this._focusableElement.setAttribute('aria-disabled', isDisabled.toString());
        this._focusableElement.setAttribute('tabindex', isDisabled ? '-1' : '0');
    }

    get disabled() {
        return this._focusableElement.getAttribute('aria-disabled') === 'true';
    }

    set labelledby(theId) {
        this._focusableElement.setAttribute('aria-labelledby', theId);
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch(attr) {
            case 'checked':
                this.checked = (newVal === null) ? false : true;
                break;
            case 'disabled':
                this.disabled = (newVal === null) ? false : true;
                break;
            case 'labelledby':
                this.labelledby = newVal;
                break;
            default:
                break;
        }
    }

    connectedCallback(e) {
        this.removeAttribute('placeholder');
        this._focusableElement.addEventListener('click', this._onClickListener);
        this._focusableElement.addEventListener('keydown', this._onKeyDownListener);
    }

    disconnectedCallback(e) {
        this._focusableElement.removeEventListener('click', this._onClickListener);
        this._focusableElement.removeEventListener('keydown', this._onKeyDownListener);
    }

    toggle() {
        if (!this.disabled) {
            this.checked = !(this.checked);
        }
    }

    _onKeyDown(e) {
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

    _onClick(e) {
        this.toggle();
    }
}

window.customElements.define('ebayui-switch', EbayUISwitchElement);
