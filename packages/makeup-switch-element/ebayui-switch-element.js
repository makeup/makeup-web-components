class EbayUISwitchElement extends HTMLElement {

    static get observedAttributes() {
        return [
            'checked',
            'disabled',
            'labelledby'
        ];
    }

    connectedCallback(e) {
        this.removeAttribute('placeholder');
        this.model._observeEvents();
    }

    disconnectedCallback(e) {
        this.model._unobserveEvents();
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch(attr) {
            case 'checked':
                this.model.checked = (newVal === null) ? false : true;
                break;
            case 'disabled':
                this.model.disabled = (newVal === null) ? false : true;
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

        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.innerHTML = `
          <style>
              .ebayui-switch {
                display: inline-flex;
                height: 40px;
                position: relative;
                vertical-align: middle;
              }
              .ebayui-switch__button {
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
              .ebayui-switch__button::after {
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
              .ebayui-switch__control {
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
              .ebayui-switch__control:focus + .ebayui-switch__button {
                outline: 1px dotted #767676;
              }
              .ebayui-switch__control[aria-disabled="true"] + .ebayui-switch__button {
                background-color: #c7c7c7;
              }
              .ebayui-switch__control[aria-checked="true"] + .ebayui-switch__button::after {
                left: 19px;
              }
              .ebayui-switch__control:not([aria-disabled="true"])[aria-checked="true"] + .ebayui-switch__button {
                background-color: #3665f3;
              }
          </style>

          <span class="ebayui-switch">
            <span class="ebayui-switch__control" role="switch" tabindex="0" aria-checked="false"></span>
            <span class="ebayui-switch__button"></span>
          </span>
        `;

        this.model = new EbayUISwitchClass(this.shadowRoot.querySelector('.ebayui-switch'), true);
    }
}

window.customElements.define('ebayui-switch', EbayUISwitchElement);
