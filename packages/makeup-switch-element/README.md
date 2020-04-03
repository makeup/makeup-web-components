# makeup-switch-element

An HTML custom element (aka Web Component) that represents an ARIA switch.

## Example

Markup:

```html
<span id="label1">makeup-switch 1</span>
<makeup-switch labelledby="label1" placeholder="true"></makeup-switch>
```

NOTE: the classnames are currently hardcoded, and not configurable. This feature will be added soon via a config parameter.

Style:

The following custom properties are available:

```
--switch-background-color-unchecked;
--switch-background-color-checked;
--switch-background-color-disabled;
--switch-foreground-color;
```

Script:

```js
const MakeupSwitchElement = require('makeup-switch-element');

document.querySelectorAll('makeup-switch').forEach(function(el, i) {
    el.addEventListener('makeup-switch-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});
```

## Attributes

### labelledby

Specify the `id` of the labelling element.

### placeholder

Set to `true` to render a placeholder style while in non-JavaScript state.

Example placeholder style:

```css
makeup-switch[placeholder="true"] {
    align-items: center;
    display: inline-flex;
    height: 40px;
}
makeup-switch[placeholder="true"]::after {
    background-color: #eee;
    border-radius: 400px;
    content: '';
    height: 24px;
    width: 40px;
}
```

## Events

### makeup-switch-toggle

Fired when the switch is toggled.

* `detail.on`: true or false
