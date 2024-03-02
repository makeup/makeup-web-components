import MakeupSwitch from 'makeup-switch';
import style from './style.js';
import template from './template.js';

class MakeupSwitchElement extends HTMLElement {
    static get observedAttributes() {
        return [
            'checked',
            'disabled',
            'label',
            'labelledby'
        ];
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

        if (!this.shadowRoot) {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const tmpl = document.createElement('template');

            tmpl.innerHTML = `
  ${style}                
  ${template}
            `;

            shadowRoot.appendChild(tmpl.content.cloneNode(true));
        }

        this.model = new MakeupSwitch(this.shadowRoot.querySelector('.switch'), {
            customElementMode: true
        });
    }
}

window.customElements.define('makeup-switch', MakeupSwitchElement);
