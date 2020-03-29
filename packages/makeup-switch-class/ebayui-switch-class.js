class EbayUISwitchClass {

    constructor(el) {
        this.el = el;
        this._focusableElement = el.querySelector('.ebayui-switch__control');

        this._observer = new MutationObserver(this._onMutation);
        this._onClickListener = this._onClick.bind(this);
        this._onKeyDownListener = this._onKeyDown.bind(this);

        this._observe();
    }

    set checked(isChecked) {
        this._unobserve();
        this._focusableElement.setAttribute('aria-checked', isChecked.toString());
        this._observe();
    }

    get checked() {
        return this._focusableElement.getAttribute('aria-checked') === 'true';
    }

    set disabled(isDisabled) {
        this._unobserve();
        this._focusableElement.setAttribute('aria-disabled', isDisabled.toString());
        this._focusableElement.setAttribute('tabindex', isDisabled ? '-1' : '0');
        this._observe();
    }

    get disabled() {
        return this._focusableElement.getAttribute('aria-disabled') === 'true';
    }

    set labelledby(theId) {
        this._unobserve();
        this._focusableElement.setAttribute('aria-labelledby', theId);
        this._observe();
    }

    toggle() {
        if (!this.disabled) {
            this.checked = !(this.checked);
        }
    }

    _observe() {
        this._observer.observe(this._focusableElement, {
            attributes: true,
            childList: false,
            subtree: false
        });
        this._focusableElement.addEventListener('click', this._onClickListener);
        this._focusableElement.addEventListener('keydown', this._onKeyDownListener);
    }

    _unobserve() {
        this._observer.disconnect();
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
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                console.log(mutation);
            }
        }
    };
}
