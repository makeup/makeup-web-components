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
              @import '../makeup-switch-style/switch.css';
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
