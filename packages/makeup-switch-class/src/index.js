'use strict';

// requires CustomEvent polyfill for IE
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
const CustomEvent = require('custom-event');

const BEM = {
    CONTROL: '.makeup-switch__control'
};

module.exports = class {
    constructor(el, customElementMode) {
        this.el = el;
        this.customElementMode = customElementMode;

        this._onClickListener = this._onClick.bind(this);
        this._onKeyDownListener = this._onKeyDown.bind(this);

        if (!customElementMode) {
            this._mutationObserver = new MutationObserver(this._onMutation);
            this._observeMutations();
            this._observeEvents();
        }
    }

    _observeMutations() {
        if (!this.customElementMode) {
            this._mutationObserver.observe(this._focusableElement, {
                attributes: true,
                childList: false,
                subtree: false
            });
        }
    }

    _unobserveMutations() {
        if (!this.customElementMode) {
            this._mutationObserver.disconnect();
        }
    }

    _observeEvents() {
        this._focusableElement.addEventListener('click', this._onClickListener);
        this._focusableElement.addEventListener('keydown', this._onKeyDownListener);
    }

    _unobserveEvents() {
        this._focusableElement.removeEventListener('click', this._onClickListener);
        this._focusableElement.removeEventListener('keydown', this._onKeyDownListener);
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

    _onMutation(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                // console.log(mutation);
            }
        }
    }

    get _focusableElement() {
        return this.el.querySelector(BEM.CONTROL);
    }

    set checked(isChecked) {
        this._unobserveMutations();
        this._focusableElement.setAttribute('aria-checked', isChecked.toString());
        this._observeMutations();
    }

    get checked() {
        return this._focusableElement.getAttribute('aria-checked') === 'true';
    }

    set disabled(isDisabled) {
        this._unobserveMutations();
        this._focusableElement.setAttribute('aria-disabled', isDisabled.toString());
        this._focusableElement.setAttribute('tabindex', isDisabled ? '-1' : '0');
        this._observeMutations();
    }

    get disabled() {
        return this._focusableElement.getAttribute('aria-disabled') === 'true';
    }

    set labelledby(theId) {
        this._unobserveMutations();
        this._focusableElement.setAttribute('aria-labelledby', theId);
        this._observeMutations();
    }

    toggle() {
        if (!this.disabled) {
            this.checked = !(this.checked);

            this.el.dispatchEvent(new CustomEvent('makeup-switch-toggle', {
                detail: {
                    value: this.checked ? 'on' : 'off'
                }
            }));
        }
    }
};