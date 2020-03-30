class MakeupUISwitchElement extends HTMLElement {

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

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
          <style>
              .makeup-switch {
                display: inline-flex;
                height: 40px;
                position: relative;
                vertical-align: middle;
              }
              .makeup-switch__button {
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
                transition: left 0.15s ease-out 0s;
                width: 40px;
              }
              .makeup-switch__button::after {
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
                transform: translate3d(0, 0, 0);
                transition: left 0.15s ease-out 0s;
                width: 18px;
              }
              .makeup-switch__control {
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
              .makeup-switch__control:focus + .makeup-switch__button {
                outline: 1px dotted #767676;
              }
              .makeup-switch__control[aria-disabled="true"] + .makeup-switch__button {
                background-color: #c7c7c7;
                background-color: var(--switch-background-color-disabled, #c7c7c7);
              }
              .makeup-switch__control[aria-checked="true"] + .makeup-switch__button::after {
                left: 19px;
              }
              .makeup-switch__control:not([aria-disabled="true"])[aria-checked="true"] + .makeup-switch__button {
                background-color: #3665f3;
                background-color: var(--switch-background-color-checked, #3665f3);
              }
          </style>

          <span class="makeup-switch">
            <span class="makeup-switch__control" role="switch" tabindex="0" aria-checked="false"></span>
            <span class="makeup-switch__button"></span>
          </span>
        `;

        this.model = new MakeupUISwitchClass(this.shadowRoot.querySelector('.makeup-switch'), true);
    }
}

window.customElements.define('makeup-switch', MakeupUISwitchElement);
