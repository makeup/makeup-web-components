# makeup-switch-class

A JavaScript class that represents an ARIA switch. No CSS provided.

## Example

The following markup is required. Classnames are configurable (see config section below).

```html
<span id="label1">makeup-switch 1</span>
<span class="makeup-switch">
  <span class="makeup-switch__control" role="switch" tabindex="0" aria-checked="false" aria-labelledby="label1"></span>
  <span class="makeup-switch__button"></span>
</span>
```

Style:

No CSS is provided. However, the class is fully compatible with [eBay Skin](https://ebay.github.io/skin/#switch).

Script:

```js
const MakeupSwitchClass = require('makeup-switch-class');

document.querySelectorAll('.makeup-switch').forEach(function(el, i) {
    const widget = new MakeupSwitchClass(el, config);

    el.addEventListener('makeup-switch-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});
```

## Config

The constructor takes a configuration object as its second parameter.

### customElementMode

Set to true if using the class as the model for a custom element (aka Web Component)

### bem

Use this object to specify your custom classnames (i.e. if you don't wish to use the default `makeup-switch` prefixes).

* `bem.control`: classname for the focusable element (default: `makeup-switch__control`)

## Events

### makeup-switch-toggle

Fired when the switch is toggled.

* `detail.on`: true or false
