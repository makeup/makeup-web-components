# makeup-switch-class

A JavaScript class that represents an ARIA switch. No CSS provided.

## Example

Markup:

```html
<span id="label1">makeup-switch 1</span>
<span class="makeup-switch">
  <span class="makeup-switch__control" role="switch" tabindex="0" aria-checked="false" aria-labelledby="label1"></span>
  <span class="makeup-switch__button"></span>
</span>
```

NOTE: the classnames are currently hardcoded, and not configurable. This feature will be added soon via a config parameter.

Script:

```js
const MakeupSwitchClass = require('makeup-switch-class');

document.querySelectorAll('.makeup-switch').forEach(function(el, i) {
    const widget = new MakeupSwitchClass(el);

    el.addEventListener('makeup-switch-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});
```

## Events

### makeup-switch-toggle

Fired when the switch is toggled.

* `detail.on`: true or false
