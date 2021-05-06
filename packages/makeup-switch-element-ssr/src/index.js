const MakeupSwitch = require('makeup-switch');

class MakeupSwitchElementSSR extends HTMLElement {
    static get observedAttributes() {
        return [
            'checked',
            'disabled',
            'label',
            'labelledby'
        ];
    }

    connectedCallback(e) {
        // this.removeAttribute('placeholder');
        this.model._observeEvents();
    }

    disconnectedCallback(e) {
        this.model._destroy();
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case 'checked':
                this.model.checked = (newVal !== null);
                break;
            case 'disabled':
                this.model.disabled = (newVal !== null);
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

        // this.attachShadow({ mode: 'open' });

        this.model = new MakeupSwitch(this.shadowRoot.querySelector('.switch'), {
            customElementMode: true
        });
    }
}

window.customElements.define('makeup-switch-ssr', MakeupSwitchElementSSR);
